const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const KittyToken = await hre.ethers.getContractFactory("KittyToken");
  const token = await KittyToken.deploy();
  await token.waitForDeployment();
  const tokenAddr = await token.getAddress();
  console.log("KittyToken deployed to:", tokenAddr);

  const KittyNFT = await hre.ethers.getContractFactory("KittyNFT");
  const nft = await KittyNFT.deploy();
  await nft.waitForDeployment();
  const nftAddr = await nft.getAddress();
  console.log("KittyNFT deployed to:", nftAddr);

  const KittyCrowdfunding = await hre.ethers.getContractFactory("KittyCrowdfunding");
  const crowdfunding = await KittyCrowdfunding.deploy(tokenAddr);
  await crowdfunding.waitForDeployment();
  const cfAddr = await crowdfunding.getAddress();
  console.log("KittyCrowdfunding deployed to:", cfAddr);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});