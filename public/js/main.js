var contractByteCode = "0x608060405261d2f060035534801561001657600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426002819055506000600460006101000a81548160ff0219169083151502179055506003544201600581905550610a87806100946000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063bb867d2c11610066578063bb867d2c14610137578063c2b6b58c14610153578063e1583c5f14610171578063ec8cb2811461018f578063fcf589d1146101ad57610093565b80630ba370241461009857806342b71a36146100b65780637138a0eb146100e85780638da5cb5b14610119575b600080fd5b6100a06101cb565b6040516100ad91906108ce565b60405180910390f35b6100d060048036036100cb9190810190610715565b6101d7565b6040516100df93929190610845565b60405180910390f35b61010260048036036100fd9190810190610715565b6102c6565b60405161011092919061089e565b60405180910390f35b6101216103ab565b60405161012e91906107ec565b60405180910390f35b610151600480360361014c91908101906106d4565b6103d1565b005b61015b61056a565b6040516101689190610883565b60405180910390f35b61017961057d565b60405161018691906108ce565b60405180910390f35b610197610583565b6040516101a491906108ce565b60405180910390f35b6101b5610589565b6040516101c291906108ce565b60405180910390f35b60008080549050905090565b600081815481106101e457fe5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102b65780601f1061028b576101008083540402835291602001916102b6565b820191906000526020600020905b81548152906001019060200180831161029957829003601f168201915b5050505050908060020154905083565b606060008083815481106102d657fe5b9060005260206000209060030201600101600084815481106102f457fe5b906000526020600020906003020160020154818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561039b5780601f106103705761010080835404028352916020019161039b565b820191906000526020600020905b81548152906001019060200180831161037e57829003601f168201915b5050505050915091509150915091565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900460ff16156103eb57600080fd5b60055442106103f957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561045457600080fd5b61045c61058f565b60405180606001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001838152602001428152509050600081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061051e9291906105c6565b506040820151816002015550507fd6958f12f094438aa5b509ba332385d19cfa26ee8f4c148cbf0bf0e98418b10b33834260405161055e93929190610807565b60405180910390a15050565b600460009054906101000a900460ff1681565b60035481565b60025481565b60055481565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061060757805160ff1916838001178555610635565b82800160010185558215610635579182015b82811115610634578251825591602001919060010190610619565b5b5090506106429190610646565b5090565b61066891905b8082111561066457600081600090555060010161064c565b5090565b90565b600082601f83011261067c57600080fd5b813561068f61068a82610916565b6108e9565b915080825260208301602083018583830111156106ab57600080fd5b6106b68382846109e7565b50505092915050565b6000813590506106ce81610a3a565b92915050565b6000602082840312156106e657600080fd5b600082013567ffffffffffffffff81111561070057600080fd5b61070c8482850161066b565b91505092915050565b60006020828403121561072757600080fd5b6000610735848285016106bf565b91505092915050565b610747816109b1565b82525050565b61075681610969565b82525050565b6107658161097b565b82525050565b60006107768261094d565b6107808185610958565b93506107908185602086016109f6565b61079981610a29565b840191505092915050565b60006107af82610942565b6107b98185610958565b93506107c98185602086016109f6565b6107d281610a29565b840191505092915050565b6107e6816109a7565b82525050565b6000602082019050610801600083018461074d565b92915050565b600060608201905061081c600083018661073e565b818103602083015261082e818561076b565b905061083d60408301846107dd565b949350505050565b600060608201905061085a600083018661074d565b818103602083015261086c81856107a4565b905061087b60408301846107dd565b949350505050565b6000602082019050610898600083018461075c565b92915050565b600060408201905081810360008301526108b8818561076b565b90506108c760208301846107dd565b9392505050565b60006020820190506108e360008301846107dd565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561090c57600080fd5b8060405250919050565b600067ffffffffffffffff82111561092d57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600061097482610987565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109bc826109c3565b9050919050565b60006109ce826109d5565b9050919050565b60006109e082610987565b9050919050565b82818337600083830152505050565b60005b83811015610a145780820151818401526020810190506109f9565b83811115610a23576000848401525b50505050565b6000601f19601f8301169050919050565b610a43816109a7565b8114610a4e57600080fd5b5056fea2646970667358221220d6603b962744f87c8cdc27491380a75a7ef0937ae75388736a6bea573084376d64736f6c63430006010033";
var contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "visitTime",
				"type": "uint256"
			}
		],
		"name": "AppendVisit",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "OPEN_DURATION",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "closedTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVisitors",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isClosed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "openDate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			}
		],
		"name": "visit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "visitorCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "visitors",
		"outputs": [
			{
				"internalType": "address",
				"name": "visitWallet",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "visitTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// const Tx = require('ethereumjs-tx').Transaction


console.log(web3.version.api)
function getAJAXObject() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) { }
        }
    }
    return request;
}
function getDateTime(){
    var d = new Date();

    d = d.getFullYear() + "-" + ('0' + (d.getMonth() + 1)).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) + " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);

    return d;
}

var contractAddr1;

// 4. ��Ʈ��Ʈ ����
document.getElementById("deploy").addEventListener("submit", function(e){
	e.preventDefault();

	var fromAddress = document.querySelector("#deploy #fromAddress").value;
	var privkey = document.querySelector("#deploy #privkey").value;
	
	var url = "/getURL?fromAddress=" + fromAddress + "&passwd=" + privkey;
	var request = getAJAXObject();

	request.open("GET", url);
	
	request.onreadystatechange = function() {
	    if (request.readyState == 4) {
	        if (request.status == 200) {
	            if(request.responseText != "An error occured") {
					// second contract
					var contract = new web3.eth.Contract(contractABI);
					// var contractData = contract.new.getData( {data: contractByteCode});

					web3.eth.getTransactionCount(fromAddress, function(err, txCount){
						var txData = {
							gasLimit: 8000000,
							gasPrice: web3.utils.toHex(web3.eth.getGasPrice()), // 10 Gwei
							nonce: web3.utils.toHex(txCount),
							from: fromAddress,
							data: contractByteCode
						}
						var transaction = new EthJS.Tx(txData) // or 'rinkeby'
						transaction.sign( EthJS.Util.toBuffer(privkey, "hex") );

						var serializedTx = transaction.serialize().toString('hex')
						web3.eth.sendSignedTransaction('0x' + serializedTx, function(err, hash){
							if(!err){
								document.querySelector("#deploy #message").innerHTML = "QuizGame Transaction Hash : " + hash + ".<br>Transaction is mining...";

								var timer = window.setInterval(function() {
									console.log("Receipt mana?")
									web3.eth.getTransactionReceipt(hash, function(err, result) {
										if (result) {
											console.log("Dapat receipt")
											window.clearInterval(timer);
											document.querySelector("#deploy #message").innerHTML = "QuizGame Transaction Hash : " + hash + "</br></br>QuizGame Contract address : </br>" + result.contractAddress;
										}
									})
								}, 3000)
							} else {
								console.log(err);
							}
						})
					})

	            }
	        }
	    }
	};
	request.send(null);
}, false);

document.getElementById("guess").addEventListener("submit", function (e) {
    e.preventDefault();

    var contractAddress = document.querySelector("#guess #contractAddress").value;
    var fromAddress = document.querySelector("#guess #fromAddress").value;
    var privkey = document.querySelector("#guess #privkey").value;
    var myPhone = document.getElementById('myPhone').value;
	var visitTime = getDateTime();
	web3.eth.defaultAccount = web3.eth.personal.getAccounts()[0]
	web3.eth.personal.unlockAccount("0xfe9816d0cd6aeb7983e8d3d94604561171a8251e", "pass0", 0);

	// from contract
	var contract = new web3.eth.Contract(contractABI, contractAddress);
	
	// call fallback
	var txSuccess = false;
	document.querySelector("#guess #message").innerHTML = "";
	document.querySelector("#guess #message3").innerHTML = "";
	document.querySelector("#guess #message2").innerHTML = "";
	

	contract.methods.visit(myPhone).send({from: fromAddress});
	document.querySelector("#guess #message2").innerHTML = "Attendance Time : "+visitTime;
	
}, false)

document.getElementById("showVisitor").addEventListener("submit", function (e) {
    e.preventDefault();

	// ����ڰ� web�� �Է��� value���� ������
    var contractAddress = document.querySelector("#showVisitor #contractAddress").value;
    var privkey = document.querySelector("#showVisitor #privkey").value;


	// from contract
	var contract = new web3.eth.Contract(contractABI, contractAddress);
	
	// call fallback
	var txSuccess = false;
	document.querySelector("#showVisitor #message").innerHTML = "";
	document.querySelector("#showVisitor #message3").innerHTML = "";
	document.querySelector("#showVisitor #message2").innerHTML = "";
	// console.log(contract)
	contract.methods.visitorCount().call((err, res) => {
		if(!err){
			console.log(res);
			for (var index = 0; index < res; index++) {
				console.log(index);
				contract.methods.getVisitors(index).call().then(function(error, result){
					if(!error)
					{
						console.log("in")
						document.querySelector("#showVisitor #message").innerHTML += result;
			
						// $("#attendance").html('Attendance Incremented to '+result[3]+' for '+result[0]+' '+result[1]);
					   
						console.log(result);
					}
					else{
						console.error(error);	
					}
						
					});
				console.log("lewat")
				}
		} 
		else{
			console.log(err);
		} 
	})

}, false)