require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.17",
  networks: {
    swisstronik: {
      url: "httpsL//json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
      chainId: 1291,
    },
  },
};
