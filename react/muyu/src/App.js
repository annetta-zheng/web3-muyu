import * as React from "react";
import {ethers} from 'ethers';
import Greeter from './artifacts/contracts/GreetContract.sol/Greeter.json';
// import exp from "constants";

const GREETER_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {greeting: ""}
  }


  async fetchGreeting() {
      if (typeof window.ethereum !== "undefined") {
        //ethereum is usable get reference to the contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(GREETER_ADDRESS, Greeter.abi, provider);

        //try to get the greeting in the contract
        try {
            const data = await contract.greet();
            this.setState({greeting: data});
            console.log("Data: ", data);
        } catch (e) {
            console.log("Err: ", e)
        }
      }
  }

  async setGreeting(newGreeting) {
      if (newGreeting && typeof window.ethereum !== "undefined") {
          //ethereum is usable, get reference to the contract
          await this.requestAccount();
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          //signer needed for transaction that changes state
          const signer = provider.getSigner();
          const contract = new ethers.Contract(GREETER_ADDRESS, Greeter.abi, signer);

          //preform transaction
          const transaction = await contract.setGreeting(newGreeting);
          await transaction.wait();
          this.fetchGreeting();
      }
  }

  async requestAccount() {
      await window.ethereum.request({method: 'eth_requestAccounts'});
  }

  render() {
    return (
        <div>
            <h1>Greeting: {this.state.greeting}</h1>
            <button onClick={()=>this.fetchGreeting()}>Get Greeting</button>
            <hr/>
            <input id={"new-greeting"} placeholder={"New Greeting"}/>
            <button onClick={() => {
                const newGreeting = document.getElementById("new-greeting").value;
                this.setGreeting(newGreeting);
            }}>Update Greeting</button>
        </div>
    )
  }
}
export default App;