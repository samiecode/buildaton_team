// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface ICustomNFT {
    function mint(address to, string memory tokenURI) external;
    function setBaseURI(string memory newBaseURI) external;
    function tokenURI(uint256 tokenId) external view returns (string memory);
}
