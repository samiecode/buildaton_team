// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ICustomNFT.sol";

contract BlockTrial {
    using Counters for Counters.Counter;

    struct Rank {
        string name;
        uint256 minPoints;
    }

    Counters.Counter public _NFTsCount;
    Counters.Counter public  _ranksCount;
    mapping(address => uint256) public userPoints;
    mapping(address => uint256) public userRank;
    address[] public users; // Store all user addresses
    Rank[] public ranks;

    IERC20 public btrToken;
    ICustomNFT public rankNFT;

    constructor(address _btrToken, address _rankNFT) {
        btrToken = IERC20(_btrToken);
        rankNFT = ICustomNFT(_rankNFT);
    }

   // Add ranks by admin
    function addRank(string memory name, uint256 minPoints) external {
        require(bytes(name).length != 0, "Name cannot be an empty string");
        require(minPoints != 0, "Min points cannot be 0");

        _ranksCount.increment();
        ranks.push(Rank(name, minPoints));
    }

    // Update ranks by admin
    function UpdateRank(uint256 rankId, string memory name, uint256 minPoints) external {
        require(bytes(name).length != 0, "Name cannot be an empty string");
        require(minPoints != 0, "Min points cannot be 0");
        require(rankId <= _ranksCount.current(), "Rank id does not exists");

        ranks[rankId] = Rank(name, minPoints);
    } 

    // Update user points
    function addPoints(address user, uint256 points) external {
        if (userPoints[user] == 0) {
            // Only add to users array the first time points are added
            users.push(user);
        }
        userPoints[user] += points;
    }

    // Manually level up to the next rank by user
    function levelUp(address user, string memory tokenUri  ) external {
        uint256 currentRank = userRank[user];
        require(currentRank < _ranksCount.current(), "Already at max rank");

        Rank memory nextRank = ranks[currentRank + 1];
        require(userPoints[user] >= nextRank.minPoints, "Not enough points to level up");

        // Update user's rank6
        userRank[user] = currentRank + 1;

        // Admin mints NFT on behalf of the user
        _NFTsCount.increment();
        rankNFT.mint(user, tokenUri); // NFT minted by admin to the user
    }

    // Admin awards tokens to the user for competitions/tasks
    function awardTokens(address user, uint256 amount) external {
        require(btrToken.balanceOf(msg.sender) >= amount, "Not enough tokens");
        btrToken.transferFrom(msg.sender, user, amount); // Admin sends tokens to the user
    }

    // Get user rank and points
    function getUserDetails(address user) external view returns (uint256 points, uint256 rankId) {
        return (userPoints[user], userRank[user]);
    }

    // Pagination: Get user details for leaderboard, 100 users at a time
    function getUsersByPage(uint256 pageNumber, uint256 pageSize) external view returns (address[] memory userAddresses, uint256[] memory points, uint256[] memory userRanks) {
        require(pageSize > 0 && pageNumber > 0, "Invalid page size or page number");
        
        uint256 startIndex = (pageNumber - 1) * pageSize;
        uint256 endIndex = startIndex + pageSize;

        if (endIndex > users.length) {
            endIndex = users.length;
        }

        uint256 userCount = endIndex - startIndex;

        address[] memory pageUsers = new address[](userCount);
        uint256[] memory pagePoints = new uint256[](userCount);
        uint256[] memory pageRanks = new uint256[](userCount);

        for (uint256 i = 0; i < userCount; i++) {
            address user = users[startIndex + i];
            pageUsers[i] = user;
            pagePoints[i] = userPoints[user];
            pageRanks[i] = userRank[user];
        }

        return (pageUsers, pagePoints, pageRanks);
    }
}
