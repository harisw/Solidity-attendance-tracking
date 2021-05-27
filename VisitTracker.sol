pragma solidity >=0.6.1;
pragma experimental ABIEncoderV2;

contract Place {

    struct Visitor {
        address visitWallet;
        bytes32 phone;
        uint256 visitTime;
    }
    Visitor[] public visitors;
    address public owner;
    uint public openDate;
    uint public OPEN_DURATION = 15 hours;
    bool public isClosed;
    uint public closedTime;
    event AppendVisit(address sender, bytes32 phone, uint256 visitTime);
    constructor() public {
        owner = msg.sender;
        openDate = block.timestamp;
        isClosed = false;
        closedTime = block.timestamp + OPEN_DURATION;
    }
    

    function visit(bytes32 _phone) public {
        require(!isClosed);
        require(block.timestamp < closedTime);
        require(msg.sender != owner);
        
        Visitor memory v = Visitor({
            visitWallet: msg.sender,
            phone: _phone,
            visitTime: block.timestamp
        });
        visitors.push(v);
        emit AppendVisit(msg.sender, _phone, block.timestamp);
        // visitors.push(Visitor({
        //     visitWallet: msg.sender,
        //     phone: _phone,
        //     visitTime: block.timestamp
        // }));
        // commitments[msg.sender] = stringToBytes32(_commitment);
    }

    function getVisitors(uint index) public view returns(bytes32, uint256) {
        return (visitors[index].phone, visitors[index].visitTime);
    }
    function visitorCount() public view returns(uint count) {
        return visitors.length;
    }
}