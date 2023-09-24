//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract Muyu is ERC721, ERC721URIStorage {
    uint gongdeBalance;

    constructor() ERC721("GongdeNFT", "GDE") {
        gongdeBalance = 0;
    }

    function getGongde() public view returns (uint) {
        return gongdeBalance;
    }

    function qiao() public {
        gongdeBalance += 1;
        console.log(gongdeBalance);
    }

    // NFT related methods
    // function safeMint(address to, uint256 tokenId, string memory uri)
    function safeMint(address to, uint256 tokenId, string memory uri)
        public
        // OnlyOwner
    {
        console.log("SafeMint");
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

}
