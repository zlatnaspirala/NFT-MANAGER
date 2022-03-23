
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import 'dotenv/config';

const { API_KEY, API_NETWORK, OWNER_ADDRESS } = process.env;
console.log(OWNER_ADDRESS);

// Initialize an alchemy-web3 instance:
const web3 = createAlchemyWeb3(
  `https://eth-${API_NETWORK}.alchemyapi.io/v2/${API_KEY}`,
);

const nfts = await web3.alchemy.getNfts({
  owner: OWNER_ADDRESS
})

console.log("fetching NFTs for address:", OWNER_ADDRESS);
console.log("number of NFTs found:", nfts.totalCount);

for (const nft of nfts.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.id.tokenId);
}
console.log("===");

// Fetch metadata for a particular NFT:
console.log("fetching metadata for a crypto coven NFT...");
const response = await web3.alchemy.getNftMetadata({
  contractAddress: "0x6614aA64e4a6558a81A809056d2c4F280284426B",
  tokenId: "1"
})

// console.log(metadata);

// Print some commonly used fields:
console.log("NFT name: ", response.title);
console.log("token type: ", response.id.tokenMetadata.tokenType);
console.log("tokenUri: ", response.tokenUri.gateway);
console.log("image url: ", response.metadata.image);
console.log("time last updated: ", response.timeLastUpdated);
console.log("Finished.");
