require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// NEON 
const proxy_url = 'https://devnet.neonevm.org';
const network_id = 245022926;

const privateKeys = [
  "0x3ac36c94ac3c318de5d2d0fe64e088db23acd5537d7b730c826341339d076459", 
  // firefox
  "0x0014bb03e18b71ff5a91fda01ebde7e73775b132c0a73b9c42dfc79b8a9407a9"
  // chrome
];

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    
    hardhat: {
      chainId: 31337
    },
    neonlabs: {
      url: proxy_url,
      accounts: privateKeys,
      network_id: network_id,
      chainId: network_id,
      allowUnlimitedContractSize: false,
      timeout: 1000000,
      isFork: true
    },
  },
  
};