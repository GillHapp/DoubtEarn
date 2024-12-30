require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  defaultNetwork: 'bsc',
  networks: {
    bsc: {
      url: "https://bnb-testnet.g.alchemy.com/v2/tx_nkvCg8f05s1_uf7Rl55_RxQZfckGb",
      accounts: [YOUR_PRIVATE_KEY]
    }
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};
