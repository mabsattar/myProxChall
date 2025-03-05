const {ethers} = require("ethers");
const {ISWTRProxy} = require( "@swisstronik/sdi-contracts/contracts/interfaces/ISWTRProxy.sol");

async function main() {

    const provider = new ethers.JsonRpcProvider(
    "https://json-rpc.testnet.swisstronik.com"
  );


  const proxyAddress = "0xE0B01554f0bEa6Aa6211775a4eC8C3fCC23dC58B";

  // contract instance
  const swtrProxy = new ethers.Contract(
    proxyAddress,
    ISWTRProxy.abi,
    provider
  );

  // function call getLatestIssuers()
  const issuers = await swtrProxy.getLatestIssuers();
  console.log("Latest Issuers:", issuers);
}

main().catch(console.error);
