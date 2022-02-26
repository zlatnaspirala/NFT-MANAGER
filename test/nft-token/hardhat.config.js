
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "^0.8.1",
  networks: {
    rinkeby: {
      url: "https://ropsten.infura.io/v3/88ae8522cde946b3a84cb96211ac581b",
      accounts: [""]
     },
   }
};
