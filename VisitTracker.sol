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
        
        visitors.push(Visitor({
            visitWallet: msg.sender,
            phone: _phone,
            visitTime: block.timestamp
        }));
        // commitments[msg.sender] = stringToBytes32(_commitment);
    }
    
    // function isGameFinish() public view returns (bool) {
    //     if (now < guessDeadline) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    function getVisitors() public view returns (Visitor[] memory){
    
        return visitors;
    }

    // function getVisitors() public view returns (Visitor[] memory){
    //     Visitor[] memory result = new Visitor[](visitors.length);
    //     for (uint i = 0; i < visitors.length; i++) {
    //         Visitor storage visitor = visitors[i];
    //         result[i] = visitor;
    //     }
    //     return result;
    // }
    
}