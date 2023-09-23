const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545'); // Hardhat's default RPC URL



// // app.js
// const Web3 = require('web3');
// const web3 = new Web3('YOUR_BLOCKCHAIN_PROVIDER_URL'); // Replace with your blockchain provider URL

// const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
// const abi = [...]; // Replace with your contract's ABI

// const contract = new web3.eth.Contract(abi, contractAddress);

// document.getElementById('createMediation').addEventListener('click', async () => {
//     // Call the createMediation function
//     await contract.methods.createMediation('PartyA_Address', 'PartyB_Address').send({ from: 'Your_Account_Address' });
//     alert('Mediation created successfully');
// });

// document.getElementById('resolveMediation').addEventListener('click', async () => {
//     const mediationId = prompt('Enter Mediation ID:');
//     if (!mediationId) return;
//     await contract.methods.resolveMediation(mediationId).send({ from: 'Your_Account_Address' });
//     alert('Mediation resolved successfully');
// });
