import * as React from "react";
import {ethers} from 'ethers';
import Muyu from './artifacts/contracts/Muyu.sol/Muyu.json';
import main_image from './img/component/muyu.png';
import level_500 from './img/demo/level_500_budda.jpg';
import level_1000 from './img/demo/level_1000_guanyin.jpg';

const MUYU_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const PIC_URI = "data:image/jpeg;base64,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";

// const DEMO_NFT = [level_500, level_1000];
export class App extends React.Component {
  constructor(props) {
      super(props);
      this.contract = null
      this.state = {
        Gongde: 0,
        NFTCollection : [],
        show : false,
    }
  }

  async init() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    this.contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, provider);
  }

  async makeNFTMetadata(assetURI, count) {
    return {
        count,
        image: assetURI
    }
  }

  /**
     * @returns {Promise<string>} - the default signing address that should own new tokens, if no owner was specified.
     */
  async defaultOwnerAddress() {
    // const signers = await this.hardhat.ethers.getSigners()
    await this.requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    //signer needed for transaction that changes state
    const signer = provider.getSigner();
    return signer.getAddress();
  }

  async createNFT() {
    // make the NFT metadata JSON and owner
    // const metadata = await this.makeNFTMetadata(PIC_URI, options)
    this.sendCreateNFTTx().then((result) => {}, (error) => {
        console.log("error: ", error);
    })
  }
  async sendCreateNFTTx() {
    const ownerAddress = await this.defaultOwnerAddress();
    // Call the mintToken method to issue a new token to the given address
    // This returns a transaction object, but the transaction hasn't been confirmed
    // yet, so it doesn't have our token id.
    if (this.contract == null) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        this.contract = new ethers.Contract(MUYU_ADDRESS, Muyu.abi, provider.getSigner());
    }
    const tx = await this.contract.safeMint(ownerAddress, this.state.Gongde, PIC_URI);

    // show demo
    if (this.state.Gongde >= 5) {
        this.setState({Gongde: this.state.Gongde - 5, NFTCollection: [level_500]});
    }
    if (this.state.Gongde >= 10) {
        this.setState({Gongde: this.state.Gongde - 10, NFTCollection: [level_1000]});
    }
    if (this.state.Gongde > 15) {
        this.setState({Gongde: this.state.Gongde - 15, NFTCollection: [level_500, level_1000]});
    }
    // The OpenZeppelin base ERC721 contract emits a Transfer event when a token is issued.
    // tx.wait() will wait until a block containing our transaction has been mined and confirmed.
    // The transaction receipt contains events emitted while processing the transaction.
    const receipt = await tx.wait()
    for (const event of receipt.events) {
        if (event.event !== 'Transfer') {
            console.log('ignoring unknown event type ', event.event);
            continue;
        }
        console.log("event.args.tokenId: ", event.args.tokenId);
        return event.args.tokenId;
    }
    throw new Error('unable to get token id');
  }

  // TODO: Use this to show the picture of NFT
  // force call demopic for now
  async showNFT() {
    this.getViewNFTTx().then((result) => {}, (error) => {
        console.log("error: ", error);
    })
  }
  async getViewNFTTx() {
    // if (tokenId !== null) {
    //     const pic = await this.contract.tokenURI(tokenId);
    //     return pic;
    // } else {
    //     return null;
    // }

    // show demo
    
    if (this.state.NFTCollection.length > 0) {
        for (let i = 0; i < this.state.NFTCollection.length; i++) {
            console.log(this.state.NFTCollection[i]);
        }
        this.setState({show: true});
    } else {
        throw new Error('no NFT minted yet');
    }
  }

  async closeShow() {
    this.setState({show: false});
  }

  async addGongde() {
    // this.state.Gongde += 1;
    this.setState({Gongde: this.state.Gongde + 1});
    console.log("this.state.Gongde: ", this.state.Gongde);
  }

  async requestAccount() {
      await window.ethereum.request({method: 'eth_requestAccounts'});
  }

  // TODO: If createNFT is not null, add something (pic and token id) to show users that nft is created successfully.
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
    const nft_style = {
        width: "200px",
        height: "200px",
        outline: "none",
        padding: "10px"
    }
    const button_style = {
        display: "flex",
        alignItems: "center",
        width: "100px",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        padding: "15px",
        // border: "1px solid white",
        borderRadius: "10px"
    };
    const close_button = () => {
        if (this.state.show) {
            return <button onClick={()=>this.closeShow()}>Close</button>
        }
    }
    const view_nft_button = () => {
        // if (this.state.NFTCollection.length > 0) {
            return <button style={button_style} onClick={()=>this.showNFT()}><h4>Show NFT</h4></button>
        // }
    }
    const mint_nft_button = () => {
        // if (this.state.Gongde >= 5) {
            return <button style={button_style} onClick={()=>this.createNFT()}><h4>Mint NFT</h4></button>
        // }
    }

    return (      
        <div style={div_style_row}>            
            <div style={div_style_col}>
                <img className = "muyu_img" onClick={()=>this.addGongde()} src= {main_image} alt ="Gongde: " style={img_style}></img>
                <hr></hr><h1>Gongde功德: {this.state.Gongde.toString()}</h1>
            </div>
            <div style={div_style_col}>
                {mint_nft_button()}
                <hr></hr>
                {view_nft_button()}
            </div>
            <div style={div_style_row}>
                {this.state.show && 
                    this.state.NFTCollection.map((item, index) => (
                    <img src= {item} alt ="NFT" style={nft_style}></img>
                ))}
                {close_button()} 
            </div> 
        </div>
  
    )
  }
}
export default App;