const tokenAddress = "0xfbfbfDdd6e35dA57b7B0F9a2C10E34Be70B3A4E9";
const tokenABI = [
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "spender",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "approve",
                 		"outputs": [
                 			{
                 				"internalType": "bool",
                 				"name": "",
                 				"type": "bool"
                 			}
                 		],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"stateMutability": "nonpayable",
                 		"type": "constructor"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "spender",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "allowance",
                 				"type": "uint256"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "needed",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "ERC20InsufficientAllowance",
                 		"type": "error"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "sender",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "balance",
                 				"type": "uint256"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "needed",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "ERC20InsufficientBalance",
                 		"type": "error"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "approver",
                 				"type": "address"
                 			}
                 		],
                 		"name": "ERC20InvalidApprover",
                 		"type": "error"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "receiver",
                 				"type": "address"
                 			}
                 		],
                 		"name": "ERC20InvalidReceiver",
                 		"type": "error"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "sender",
                 				"type": "address"
                 			}
                 		],
                 		"name": "ERC20InvalidSender",
                 		"type": "error"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "spender",
                 				"type": "address"
                 			}
                 		],
                 		"name": "ERC20InvalidSpender",
                 		"type": "error"
                 	},
                 	{
                 		"anonymous": false,
                 		"inputs": [
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "owner",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "spender",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": false,
                 				"internalType": "uint256",
                 				"name": "value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "Approval",
                 		"type": "event"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "to",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "amount",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "mint",
                 		"outputs": [],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "_minter",
                 				"type": "address"
                 			}
                 		],
                 		"name": "setMinter",
                 		"outputs": [],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "to",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "transfer",
                 		"outputs": [
                 			{
                 				"internalType": "bool",
                 				"name": "",
                 				"type": "bool"
                 			}
                 		],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"anonymous": false,
                 		"inputs": [
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "from",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "to",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": false,
                 				"internalType": "uint256",
                 				"name": "value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "Transfer",
                 		"type": "event"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "from",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "address",
                 				"name": "to",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "transferFrom",
                 		"outputs": [
                 			{
                 				"internalType": "bool",
                 				"name": "",
                 				"type": "bool"
                 			}
                 		],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "owner",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "address",
                 				"name": "spender",
                 				"type": "address"
                 			}
                 		],
                 		"name": "allowance",
                 		"outputs": [
                 			{
                 				"internalType": "uint256",
                 				"name": "",
                 				"type": "uint256"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "account",
                 				"type": "address"
                 			}
                 		],
                 		"name": "balanceOf",
                 		"outputs": [
                 			{
                 				"internalType": "uint256",
                 				"name": "",
                 				"type": "uint256"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "decimals",
                 		"outputs": [
                 			{
                 				"internalType": "uint8",
                 				"name": "",
                 				"type": "uint8"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "minter",
                 		"outputs": [
                 			{
                 				"internalType": "address",
                 				"name": "",
                 				"type": "address"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "name",
                 		"outputs": [
                 			{
                 				"internalType": "string",
                 				"name": "",
                 				"type": "string"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "symbol",
                 		"outputs": [
                 			{
                 				"internalType": "string",
                 				"name": "",
                 				"type": "string"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "totalSupply",
                 		"outputs": [
                 			{
                 				"internalType": "uint256",
                 				"name": "",
                 				"type": "uint256"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	}
                 ];

async function connect() {
    if (!window.ethereum) {
        alert("Download MetaMask!");
        return;
    }

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    if (chainId !== '0x7a69') {
        alert("please, connect on the local net Hardhat (localhost 8545)!");
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];

        document.getElementById('userAddress').innerText = address;
        document.getElementById('infoBlock').style.display = 'block';
        document.getElementById('connectBtn').innerText = "Connected";

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const ethBal = await provider.getBalance(address);
        document.getElementById('ethBalance').innerText = ethers.utils.formatEther(ethBal);

        const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
        const tokenBal = await tokenContract.balanceOf(address);

        document.getElementById('tokenBalance').innerText = ethers.utils.formatUnits(tokenBal, 18);

    } catch (error) {
        console.error("Ошибка подключения:", error);
    }
}

async function addToken() {
    try {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: 'CUTE',
                    decimals: 18,
                },
            },
        });
    } catch (error) { console.log(error); }
}

document.getElementById('connectBtn').onclick = connect;
document.getElementById('addTokenBtn').onclick = addToken;
