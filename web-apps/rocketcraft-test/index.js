
/**
 *  Source code to interact with smart contract
 */

/**
 *  web3 provider with fallback for old version
 */
window.addEventListener('load', async () => {
  // New web3 provider
  if(window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // ask user for permission
      await ethereum.enable();
      // user approved permission
      console.log("Looks nice!");
      checkMyContract();
    } catch(error) {
      // user rejected permission
      console.log('User rejected permission');
    }
  }
  // Old web3 provider
  else if(window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    // no need to ask for permission
  }
  // No web3 provider
  else {
    console.log('No web3 provider detected');
  }
});
console.log(window.web3.currentProvider)

var registerSetInfo,
    registerGetInfo;

function checkMyContract() {
  // contractAddress and abi are setted after contract deploy
  var contractAddress = '0x609029d83789444B7dE612E943430063a95D3A62';
  var abi = JSON.parse(`[
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
  ]`);

  // contract instance
  contract = new web3.eth.Contract(abi, contractAddress);

  // Accounts
  var account;

  web3.eth.getAccounts(function(err, accounts) {
    if(err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if(accounts.length == 0) {
      alert("No account found! Make sure the Ethereum client is configured properly.");
      return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
  });

  //Smart contract functions
  registerSetInfo = function() {
    info = $("#newInfo").val();
    contract.methods.setInfo(info).send({from: account}).then(function(tx) {
      console.log("Transaction: ", tx);
    }).catch((err) =>{
      console.log("Error in setInfo.call: " , err);
    });
    $("#newInfo").val('');
  }

  registerGetInfo = function() {
    contract.methods.getInfo().call().then(function(info) {
      console.log("info: ", info);
      document.getElementById('lastInfo').innerHTML = info;
    }).catch((err) =>{
      console.log("Error in getInfo.call: " , err);
    });;
  }

}
