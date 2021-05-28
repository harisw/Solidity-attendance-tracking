pragma solidity >=0.6.1;
pragma experimental ABIEncoderV2;

contract Place {

    struct Visitor {
        address visitWallet;
        string phone;
        string home;
        uint256 visitTime;
    }
    Visitor[] public visitors;
    address public owner;
    uint public openDate;
    uint public OPEN_DURATION = 15 hours;
    bool public isClosed;
    uint public closedTime;
    event AppendVisit(address sender, string phone, string nameHome, uint256 visitTime);
    constructor() public {
        owner = msg.sender;
        openDate = block.timestamp;
        isClosed = false;
        closedTime = block.timestamp + OPEN_DURATION;
    }
    

    function visit(string memory _phone, string memory _home) public {
        require(!isClosed);
        require(block.timestamp < closedTime);
        require(msg.sender != owner);
        
        Visitor memory v = Visitor({
            visitWallet: msg.sender,
            phone: _phone,
            home: _home,
            visitTime: block.timestamp
        });
        visitors.push(v);
        emit AppendVisit(msg.sender, _phone, _home, block.timestamp);
        // visitors.push(Visitor({
        //     visitWallet: msg.sender,
        //     phone: _phone,
        //     visitTime: block.timestamp
        // }));
        // commitments[msg.sender] = stringToBytes32(_commitment);
    }

    function getVisitors(uint index) public view returns(string memory, string memory, uint256) {
        return (visitors[index].phone, visitors[index].home, visitors[index].visitTime);
    }
    function visitorCount() view public returns (uint) {
        return visitors.length;
    }
}