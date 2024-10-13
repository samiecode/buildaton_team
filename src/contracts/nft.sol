// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BlockTrailNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    string private _baseTokenURI;
    address public ceo;

    mapping(uint256 => string) private _customTokenURIs;

    // Event to track CEO changes
    event CEOChanged(address indexed oldCEO, address indexed newCEO);

    // Modifier to restrict access to only the CEO
    modifier onlyCEO() {
        require(msg.sender == ceo, "Not authorized: Only CEO can perform this action");
        _;
    }

    // Function to change the CEO (only the current CEO or owner can call this)
    function changeCEO(address newCEO) public onlyCEO {
        require(newCEO != address(0), "Invalid address: new CEO cannot be the zero address");
        emit CEOChanged(ceo, newCEO);
        ceo = newCEO;
    }

    constructor(string memory baseURI) ERC721("BlockTrailNFT", "BTNFT") {
        _baseTokenURI = baseURI;
        ceo = msg.sender; // Initialize the deployer as the first CEO
        emit CEOChanged(address(0), msg.sender);
    }

    // Custom mint function, allows setting token URI during minting
    function mint(address to, string memory customTokenURI) public onlyCEO {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _mint(to, tokenId);
        _customTokenURIs[tokenId] = customTokenURI;
    }

    // Override _baseURI to return the base URI set by the owner
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // Function to update the base URI
    function setBaseURI(string memory newBaseURI) public onlyCEO {
        _baseTokenURI = newBaseURI;
    }

    // Override tokenURI to use custom token URIs if available
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId < _tokenIdCounter.current(), "ERC721Metadata: URI query for nonexistent token");

        string memory _customURI = _customTokenURIs[tokenId];
        string memory base = _baseURI();

        // Return custom URI if set, otherwise return base + tokenId
        if (bytes(_customURI).length > 0) {
            return _customURI;
        }
        return string(abi.encodePacked(base, Strings.toString(tokenId)));
    }
}
