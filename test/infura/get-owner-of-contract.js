
const Web3 = require('web3');

var abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  }
];

const web3 = new Web3("wss://ropsten.infura.io/ws/v3/88ae8522cde946b3a84cb96211ac581b" /*"wss://mainnet.infura.io/ws/v3/88ae8522cde946b3a84cb96211ac581b"*/);

var MyContract = new web3.eth.Contract(abi, '0x41CC48e4d1ed1128c087b3202545e6A34E240D14');

// initiate contract for an address
// var myContractInstance = MyContract.at();

// call constant function (synchronous way)
var owner = myContractInstance .owner.call();

console.log("owner="+owner);