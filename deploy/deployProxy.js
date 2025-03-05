const hre = require("hardhat");

async function main() {
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */
  const myProxyChall = await hre.ethers.getContractFactory("myProxychall");

  const swissProxyAddress = "0xE0B01554f0bEa6Aa6211775a4eC8C3fCC23dC58B";

  // deploying contract
  console.log("Deploying myproxychall contract...");
  const myContract = await MyProxyChall.deploy(swissProxyAddress);
  await myContract.waitForDeployment();


  // Logging the deployed contract address
  console.log("myProxychall deployed to: ", await myContract.getAddress());

}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
