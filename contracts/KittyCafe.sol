pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KittyToken is ERC20 {
    address public owner;

    constructor() ERC20("KittyToken", "KITTY") {
        owner = msg.sender;
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}

contract KittyCrowdfunding {
    struct Campaign {
        address owner;
        string title;
        uint256 goal;
        uint256 deadline;
        uint256 amountRaised;
        bool finalized;
    }

    KittyToken public rewardToken;
    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;
    
    uint256 public constant REWARD_RATE = 1000;

    constructor(address _tokenAddress) {
        rewardToken = KittyToken(_tokenAddress);
    }

    function createCampaign(string memory _title, uint256 _goal, uint256 _durationInDays) public {
        uint256 deadline = block.timestamp + (_durationInDays * 1 days);
        campaigns[campaignCount] = Campaign(msg.sender, _title, _goal, deadline, 0, false);
        campaignCount++;
    }

    function contribute(uint256 _id) public payable {
        Campaign storage c = campaigns[_id];
        require(block.timestamp < c.deadline, "Ended");
        
        c.amountRaised += msg.value;

        uint256 reward = msg.value * REWARD_RATE;
        rewardToken.mint(msg.sender, reward);
    }
}