import * as React from "react";
import {ethers} from 'ethers';
import Muyu from './artifacts/contracts/Muyu.sol/Muyu.json';
import main_image from './img/muyu.png';
// import exp from "constants";

const MUYU_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        Gongde: 0,
    }
  }


  async fetchGongde() {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, provider);

        try {
            const data = await contract.getGongde();
            this.setState({Gongde: data});
        } catch (e) {
            console.log("Err: ", e)
        }
      }
  }
  async qiao() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, provider);
        try {
            const data = await contract.getGongde();
            this.setState({Gongde: data});
        } catch (e) {
            console.log("Err: ", e)
        }
      }
  }

  async addGongde() {
      if (typeof window.ethereum !== "undefined") {
          await this.requestAccount();
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          const signer = provider.getSigner();

          try {
            const contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, signer);

            const transaction = await contract.qiao();
            console.log(transaction);
            //   console.log("Data: ", contract.getGongde());
            await transaction.wait();
            this.fetchGongde();
          } catch (e) {
              console.log("Err: ", e);
          }
          
      }
  }

  async requestAccount() {
      await window.ethereum.request({method: 'eth_requestAccounts'});
  }

  render() {
    const img_style = {
        display: "flex",
        width: "350px",
        height: "268px",
        position: "relative",
        backgroundColor: "black",
        borderColor: "black",
        outline: "none",
    };
    const div_style_row = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        height: "100vh",
        color: "white",
    };
    const div_style_col = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "50px"
    };
    return (
        <div style={div_style_row}>
            <div style={div_style_col}>
                <img className = "muyu_img" onClick={()=>this.addGongde()} src= {main_image} alt ="Gongde: " style={img_style}></img>
                <h1>Gongde: {this.state.Gongde.toString()}</h1>
            </div>
            <div style={div_style_col}><p>NFT PLACE</p></div>
        </div>    
    )
  }
}
export default App;