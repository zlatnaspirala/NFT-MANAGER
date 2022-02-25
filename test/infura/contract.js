
/**
 * @description
 * CONTRACT STAFF
 * --------------
 * web
 */

// const Web3 = require('web3');
const web3 = new Web3("wss://ropsten.infura.io/ws/v3/88ae8522cde946b3a84cb96211ac581b");
/*"wss://mainnet.infura.io/ws/v3/88ae8522cde946b3a84cb96211ac581b"*/

// Accounts
var account, abi, MyContract, account = '0x41CC48e4d1ed1128c087b3202545e6A34E240D14';

window.onload = () => {
  // Accounts
  abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "getVersion",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInfo",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_gamePlayName",
          "type": "string"
        }
      ],
      "name": "setInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  MyContract = new web3.eth.Contract(abi, '0x41CC48e4d1ed1128c087b3202545e6A34E240D14');

  
  web3.eth.defaultAccount = '0x41CC48e4d1ed1128c087b3202545e6A34E240D14';
  web3.eth.wallet.add()

}
// call constant function (synchronous way)
// var owner = MyContract.owner.call();

console.log("Acount: " + account);
 
// initiate contract for an address
// var myContractInstance = MyContract.at();

