require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: {
        version: "0.7.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
      artifacts: './artifacts'
    },
    networks: {
      hardhat: {
        chainId: +process.env.HARDHAT_CHAIN_ID || 1337
      },
    }
  };