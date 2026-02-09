# Hello Kitty Cafe World 
### Decentralized Crowdfunding & Gacha Game

![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![Hardhat](https://img.shields.io/badge/Hardhat-FFDB1C?style=for-the-badge&logo=hardhat&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![MetaMask](https://img.shields.io/badge/MetaMask-E2761B?style=for-the-badge&logo=metamask&logoColor=white)

**Hello Kitty Cafe World** is a gamified decentralized application (dApp) where users support virtual cafes through crowdfunding and earn rewards to play a high-stakes Gacha game for rare NFT treats.

---

##  Development Team
*Developed by students:*
- **Tutkyshbaeva Dana**
- **Yergesh Moldir**
- **Abdikul Bakdaulet**

**Repository:** [Blockchain Final Project](https://github.com/Utka-Nosik/Blockchain-final)



##  Key Features & Design
###  Gamified Crowdfunding
Unlike traditional static crowdfunding, this project integrates a **circular economy**:
1. **Donate**: Users contribute ETH to cafe campaigns.
2. **Earn**: Donors receive `$KITTY` (ERC-20) tokens as rewards.
3. **Play**: Burn `$KITTY` tokens to spin the Gacha machine.
4. **Collect**: Win randomized, collectible digital treats as **NFTs** (ERC-721).

### Aesthetic & UX
- **Theme**: A "Pastel Pink" palette inspired by Sanrio aesthetics.
- **Accessibility**: Designed to lower the entry barrier for non-technical users by making Web3 interactions feel playful.
- **Real-time Sync**: Automated UI updates for progress bars and inventory items.



## System Architecture

The application is built on three robust layers:

1. **Backend (Smart Contracts)** 
   - Written in **Solidity**.
   - Leverages **OpenZeppelin** libraries for industry-standard security.
   - Handles tokenomics (Minting/Burning) and campaign logic.

2. **Interaction Layer (Ethers.js)** 
   - Facilitates communication between the frontend and the blockchain.
   - Manages wallet connection via **MetaMask**.
   - Signs and executes transactions in real-time.

3. **Frontend Layer** 
   - Built with **HTML5, CSS3, and JavaScript**.
   - Provides an interactive dashboard for managing profile, inventory, and donations.

---

## Smart Contract Logic

| Contract | Standard | Description |
| :--- | :--- | :--- |
| **KittyToken** | ERC-20 | The main reward currency. It is minted during donations and burned for Gacha spins to control inflation. |
| **KittyNFT** | ERC-721 | Manages collectible treats. Each NFT is linked to metadata defining its rarity (Ice Cream, Milkshake, Cake). |
| **KittyCrowdfunding** | Custom | Handles the logic for campaigns, tracks the `amountRaised`, and triggers token rewards. |



## Deployment & Execution

Follow these steps to run the project in a local environment:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MetaMask](https://metamask.io/) browser extension.

### 2. Start Local Blockchain
Launch a local Ethereum network using Hardhat:
```bash
npx hardhat node
