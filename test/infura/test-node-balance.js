
const Web3 = require('web3');

// Variables definition
const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
const addressTo = '0x41CC48e4d1ed1128c087b3202545e6A34E240D14';
const web3 = new Web3("wss://ropsten.infura.io/ws/v3/88ae8522cde946b3a84cb96211ac581b" 
/*"wss://mainnet.infura.io/ws/v3/88ae8522cde946b3a84cb96211ac581b"*/);

// Balance call
const balances = async () => {
   const balanceFrom = web3.utils.fromWei(
      await web3.eth.getBalance(addressFrom),
      'ether'
   );
   const balanceTo = await web3.utils.fromWei(
      await web3.eth.getBalance(addressTo),
      'ether'
   );
   console.log(`The balance of ${addressFrom} is: ${balanceFrom} ETH.`);
   console.log(`The balance of ${addressTo} is: ${balanceTo} ETH.`);
};

balances();