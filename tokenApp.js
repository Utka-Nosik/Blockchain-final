const connectButton = document.getElementById('connectButton');
const accountSpan = document.getElementById('account');
const balanceSpan = document.getElementById('balance');
const recipientInput = document.getElementById('recipient');
const amountInput = document.getElementById('amount');
const transferButton = document.getElementById('transferButton');

if (!window.ethereum) {
    alert("MetaMask not detected!");
}

let provider;
let signer;
let tokenContract;

const tokenAddress = "0xYourTokenAddress";
const tokenABI = [
    "function balanceOf(address owner) view returns (uint256)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "event Transfer(address indexed from, address indexed to, uint256 value)"
];

async function connectWallet() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        accountSpan.innerText = account;
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner(account);
        tokenContract = new ethers.Contract(tokenAddress, tokenABI, signer);
        await updateBalance();
        listenTransferEvents();
    } catch (error) {
        console.error("Connection error:", error);
    }
}

async function updateBalance() {
    try {
        const account = await signer.getAddress();
        const balance = await tokenContract.balanceOf(account);
        balanceSpan.innerText = ethers.utils.formatUnits(balance, 18);
    } catch (error) {
        console.error("Balance update error:", error);
    }
}

async function transferTokens() {
    try {
        const to = recipientInput.value;
        const amount = ethers.utils.parseUnits(amountInput.value, 18);
        if (!to || !amountInput.value) {
            alert("Enter recipient and amount!");
            return;
        }
        const tx = await tokenContract.transfer(to, amount);
        await tx.wait();
        await updateBalance();
        alert("Transfer successful!");
        recipientInput.value = "";
        amountInput.value = "";
    } catch (error) {
        console.error("Transfer failed:", error);
        alert("Transfer failed: " + error.message);
    }
}

function listenTransferEvents() {
    tokenContract.on("Transfer", (from, to, value) => {
        signer.getAddress().then(account => {
            if (from === account || to === account) updateBalance();
        });
    });
}
connectButton.addEventListener('click', connectWallet);
transferButton.addEventListener('click', transferTokens);

