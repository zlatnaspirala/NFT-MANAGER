
# NFT WIZARD

  - Learn about Crypto world [ETH].
  - Create NFT token and preview.
  - Explore different ways [libs]
  - Learn about web3. Test implementation in gameplay zone.
  - Use alchemy services
  - Use Infura services

### Meaning alias

 RootStock RSK
 ETHEREUM VIRTUAL MACHINE (EVM)  Self host - Lager or miner
 Non-Fungible Tokens (NFTs) - Contracts


Working actual in this repo:
 `generator`
  It use hardhat and alchemy free service quota.
  One secound for creating NFT.


## Help tools:

### REMIX TOOL
Very usefull online tool.Get ABI string for current contract.
http://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js


### ALCHEMY
Generator based on tutorials:
https://docs.alchemy.com/alchemy/tutorials/how-to-create-an-nft

Generator is based on alchemy tutorials.


### Using INFURA
In dev.

CURRENT PLAN
Core $0/mo
Ethereum Mainnet and Testnets
100,000 Requests/Day
3 Projects
Community Support Forum

Command:
```
npm run infura-balance
```
Output:
```
The balance of 0x1d606A410Ec30EEF3a88183aAd409f40a205C921 is: 0 ETH.
```

## ERC-721 smart contract
   Popular topic.


## General documentation for web3 lib:

web3 cli is great tool but i still need to install it on windows10[my mashine].
Alternative is VM ISO linux. I found hardhat with nice windows start up.
I will return on web3 cli. {deploying new contracts etc..}
https://web3js.readthedocs.io/en/v1.2.11/getting-started.html


## Potencial errors

metamask test with web3 ->
```
web3.min.js:22 Uncaught (in promise) Error: Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.
```


### You can mine it if you want that. [OPTIMAL FOR THIS PROJECT]
https://geth.ethereum.org/docs/interface/managing-your-accounts

Add keystore file intro keysotre path. create new account to see where is it on outputs.
```
geth account list
```

https://geth.ethereum.org/docs/interface/mining
geth --http --mine --miner.threads=2 --miner.etherbase 0x41CC48e4d1ed1128c087b3202545e6A34E240D14
