const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const KittyToken = await hre.ethers.getContractFactory("KittyToken");
  const token = await KittyToken.deploy();
  await token.waitForDeployment(); 
  const tokenAddress = await token.getAddress();
  console.log("KittyToken deployed to:", tokenAddress);

  const KittyCrowdfunding = await hre.ethers.getContractFactory("KittyCrowdfunding");
  const crowdfunding = await KittyCrowdfunding.deploy(tokenAddress);
  await crowdfunding.waitForDeployment();
  const cfAddress = await crowdfunding.getAddress();
  console.log("KittyCrowdfunding deployed to:", cfAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});