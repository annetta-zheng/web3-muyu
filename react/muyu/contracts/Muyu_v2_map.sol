//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Muyu {
    address public user;
    mapping(address => uint) gongdeBalance;

    constructor(address _user) {
        user = _user;
    }

    function getGongde() public view returns (uint) {
        return gongdeBalance;
    }

    function qiao() public {
        gongdeBalance += 1;
        console.log(gongdeBalance);
    }
}
