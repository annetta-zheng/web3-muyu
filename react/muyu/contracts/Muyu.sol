//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Muyu {
    uint gongdeBalance;

    constructor() {
        gongdeBalance = 0;
    }

    function getGongde() public view returns (uint) {
        return gongdeBalance;
    }

    function qiao() public {
        gongdeBalance += 1;
        console.log(gongdeBalance);
    }
}
