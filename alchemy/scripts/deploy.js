
async function main() {
  // Grab the contract factory 
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // t Box.deploy({ gasLimit: 20287350, gasPrice: 252873500}); 
  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy({ gasLimit: 20287350, gasPrice: 252873500}); // Instance of the contract 
  console.log("Contract deployed to address:", myNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
