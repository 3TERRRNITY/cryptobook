import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account: ", deployer.address);

  const ContactFactory = await ethers.getContractFactory("ContactFactory");
  const contactFactory = await ContactFactory.deploy();

  await contactFactory.waitForDeployment();

  console.log("Contract deployed to: ", await contactFactory.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
