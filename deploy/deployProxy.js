const hre = require("hardhat");

async function main() {
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  const SWTRProxy = await hre.ethers.getContractFactory("SWTRProxy");


  // deploying contract
  console.log("Deploying SWTR Proxy contract...");
  const swtrProxy = await contract.waitForDeployment();
  await swtrProxy.waitForDeployment();

  // Logging the deployed contract address
  console.log("SWTR Proxy deployed to: ", await swtrProxy.getAddress());

}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
