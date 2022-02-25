
// Source code to interact with smart contract

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
  // New web3 provider
  if(window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      // ask user for permission
      await ethereum.enable();
      // user approved permission
      console.log("GOOD!");
      checkMyContract()
     
    } catch(error) {
      // user rejected permission
      console.log('user rejected permission');
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

    function checkTest2() {
      var rocketcraftingContract = new web3.eth.Contract([{"constant":true,"inputs":[],"name":"getVersion","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_gamePlayName","type":"string"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
      var rocketcrafting = rocketcraftingContract.deploy({
           data: '0x608060405234801561001057600080fd5b50610453806100206000396000f3fe608060405234801561001057600080fd5b506004361061005e576000357c0100000000000000000000000000000000000000000000000000000000900480630d8e6e2c146100635780635a9b0b89146100e6578063937f6e7714610169575b600080fd5b61006b610224565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100ab578082015181840152602081019050610090565b50505050905090810190601f1680156100d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100ee6102c6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012e578082015181840152602081019050610113565b50505050905090810190601f16801561015b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102226004803603602081101561017f57600080fd5b810190808035906020019064010000000081111561019c57600080fd5b8201836020820111156101ae57600080fd5b803590602001918460018302840111640100000000831117156101d057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610368565b005b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102bc5780601f10610291576101008083540402835291602001916102bc565b820191906000526020600020905b81548152906001019060200180831161029f57829003601f168201915b5050505050905090565b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561035e5780601f106103335761010080835404028352916020019161035e565b820191906000526020600020905b81548152906001019060200180831161034157829003601f168201915b5050505050905090565b806000908051906020019061037e929190610382565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103c357805160ff19168380011785556103f1565b828001600101855582156103f1579182015b828111156103f05782518255916020019190600101906103d5565b5b5090506103fe9190610402565b5090565b61042491905b80821115610420576000816000905550600101610408565b5090565b9056fea165627a7a723058207e7c9af685fbb0ca7faf3170e64f6110279ee2703a8e453f9c1f16c39f9e13d80029', 
           arguments: [
           ]
      }).send({
           from: web3.eth.accounts[0], 
           gas: '4700000'
         }, function (e, contract){
          console.log(e, contract);
          if (typeof contract.address !== 'undefined') {
               console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          }
       })

    }


function checkMyContract() {
  // contractAddress and abi are setted after contract deploy
  // 0xd9145CCE52D386f254917e481eB44e9943F39138 OWN
  // 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4 TEST ADDRESS
  var contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
  // var abi = JSON.parse('[{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_info","type":"string"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
//[
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
      console.log("EEEEEEEE" , err);
    });
    $("#newInfo").val('');
  }

  registerGetInfo = function() {
    contract.methods.getInfo().call().then(function(info) {
      console.log("info: ", info);
      document.getElementById('lastInfo').innerHTML = info;
    }).catch((err) =>{
      console.log("get EEEEEEEE" , err);
    });;
  }
  /*
  This part connected to RSK Local node using the wallet injected, in our case, Metamask:
  
  // web3 provider with fallback for old version
  window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
  });
  */

}