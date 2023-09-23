import * as React from "react";
import {ethers} from 'ethers';
import Muyu from './artifacts/contracts/Muyu.sol/Muyu.json';
// import exp from "constants";

const MUYU_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {Gongde: 0}
  }


  async fetchGongde() {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, provider);

        //try to get the greeting in the contract
        try {
            const data = await contract.getGongde();
            this.setState({Gongde: data});
            // console.log("Data: ", data);
        } catch (e) {
            console.log("Err: ", e)
        }
      }
  }

  async addGongde() {
      if (typeof window.ethereum !== "undefined") {
          //ethereum is usable, get reference to the contract
          await this.requestAccount();
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          //signer needed for transaction that changes state
          const signer = provider.getSigner();
          const contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, signer);

          //preform transaction
          const transaction = await contract.qiao();
          console.log(transaction);
        //   console.log("Data: ", contract.getGongde());
          await transaction.wait();
          
          this.fetchGongde();
      }
  }

  async requestAccount() {
      await window.ethereum.request({method: 'eth_requestAccounts'});
  }

  render() {
    return (
        <div>
            <h1>Gongde: {this.state.Gongde.toString()}</h1>
            <button onClick={()=>this.fetchGongde()}>View Gongde</button>
            <hr/>
            <button onClick={()=>this.addGongde()}>Qiao to Get Gongde</button>
        </div>
    )
  }
}
export default App;