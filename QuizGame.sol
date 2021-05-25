pragma solidity >=0.6.1;

contract QuizCoin {
    mapping (address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function transfer(address _to, uint256 _value) public {
        require(_value >= 0);
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
    }
    
    function getBalance(address user) public view returns (uint256) {
        return balanceOf[user];
    }
}

contract QuizGame {
    QuizCoin public prizeContract;
    
    address public creator;
    mapping(address => bytes32) public commitments;
    uint public guessDeadline;
    uint public constant GUESS_DURATION = 3 minutes;
    bool public withdrawn;
    uint256 public totPrize;
    
    event ReservedToken(address backer, uint value);
    event WithdrawalToken(address addr, uint value);
    
    constructor(QuizCoin _prizeContractAddr, string memory _commitment) public {
        prizeContract = QuizCoin(_prizeContractAddr);
        creator = msg.sender;
        commitments[creator] = createCommitment(creator, stringToBytes32(_commitment));
        guessDeadline = now + GUESS_DURATION;
        totPrize = 0;
        withdrawn = false;
    }

    fallback() external payable {
        require(now < guessDeadline);
        require(!withdrawn);
        require(msg.sender != creator);
        
        totPrize += msg.value;
        emit ReservedToken(msg.sender, msg.value);
    }
    
    function guess(string memory _commitment) public {
        require(now < guessDeadline);
        require(msg.sender != creator);
        
        commitments[msg.sender] = stringToBytes32(_commitment);
    }
    
    function isGameFinish() public view returns (bool) {
        if (now < guessDeadline) {
            return false;
        } else {
            return true;
        }
    }

    function reveal() public {
        require(!withdrawn);
        if (isGameFinish()) {
            if (createCommitment(creator, commitments[msg.sender]) == commitments[creator]) {
                withdrawn = true;
            
                prizeContract.transfer(msg.sender, totPrize);
                emit WithdrawalToken(msg.sender, totPrize);
            }
        }
    }
    
    function createCommitment(address user, bytes32 answer) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(user, answer));
    }

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
    
        assembly {
            result := mload(add(source, 32))
        }
    }
}