// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BlockTrial is ERC20 {
    constructor(uint256 amount) ERC20("BlockTrial Token", "BTR") {
        // Initial mint to the contract owner
        _mint(msg.sender, amount * 10 ** uint256(decimals())); // Adjust the amount as necessary
    }
}
