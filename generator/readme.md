
# GENERATOR

Already setup env. All you need to run `npm i` in any folder with package.json file just like always be in node.js
or JS. Add new contract in `generator/contracts/`


List solidity examples also working folder for this repo `generator/contracts/`
 - `RocketCrafting`
   Basic write and read.
 - `MAXIMUMROULETTE` is ERC721, Ownable but still free and without embedded fee


#### TUTORIAL USED:
https://docs.alchemy.com/alchemy/tutorials/how-to-create-an-nft


## COMPILE SOL
```
npx hardhat compile
npx hardhat compile --force
```

```
Downloading compiler 0.7.3
Compiling 16 files with 0.7.3
contracts/MyEFT.sol:14:5: Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
    constructor() public ERC721("MyNFT", "NFT") {}
    ^--------------------------------------------^

Solidity compilation finished successfully
```

## DEPLOY
```
npx hardhat run scripts/deploy.js --network ropsten
npx hardhat run scripts/deploy.js --network rinkeby
```

## Verify on ether scan
npx hardhat verify --network ropsten 0x6614aA64e4a6558a81A809056d2c4F280284426B


Contract deployed to address: 

rocketCrafting test sol
0x609029d83789444B7dE612E943430063a95D3A62

maximumroulette
0x6614aA64e4a6558a81A809056d2c4F280284426B



## HELP

Returns the information about a transaction requested by transaction hash. In the response object, `blockHash`, `blockNumber`, and `transactionIndex` are `null` when the transaction is pending.
