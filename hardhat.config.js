require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.24",
  networks: {
    swisstronik: {
      url: "httpsL//json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
      chainId: 1291,
      urls: {
        apiURL: "https://explorer-evm.testnet.swisstronik.com/api",
        browserURL: "https://explorer-evm.testnet.swisstronik.com",
      },
    },
  },
};
