var contractByteCode = "0x608060405261d2f060035534801561001657600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426002819055506000600460006101000a81548160ff021916908315150217905550600354426100889190610093565b600581905550610122565b600061009e826100e9565b91506100a9836100e9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156100de576100dd6100f3565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610c77806101316000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063c2b6b58c11610066578063c2b6b58c14610139578063e1583c5f14610157578063e8a6119814610175578063ec8cb28114610191578063fcf589d1146101af57610093565b80630ba370241461009857806342b71a36146100b65780637138a0eb146100e95780638da5cb5b1461011b575b600080fd5b6100a06101cd565b6040516100ad9190610a41565b60405180910390f35b6100d060048036038101906100cb91906108e4565b6101d9565b6040516100e0949392919061098e565b60405180910390f35b61010360048036038101906100fe91906108e4565b610349565b604051610112939291906109fc565b60405180910390f35b610123610554565b6040516101309190610973565b60405180910390f35b61014161057a565b60405161014e91906109e1565b60405180910390f35b61015f61058d565b60405161016c9190610a41565b60405180910390f35b61018f600480360381019061018a9190610878565b610593565b005b61019961074c565b6040516101a69190610a41565b60405180910390f35b6101b7610752565b6040516101c49190610a41565b60405180910390f35b60008080549050905090565b600081815481106101e957600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461023290610b58565b80601f016020809104026020016040519081016040528092919081815260200182805461025e90610b58565b80156102ab5780601f10610280576101008083540402835291602001916102ab565b820191906000526020600020905b81548152906001019060200180831161028e57829003601f168201915b5050505050908060020180546102c090610b58565b80601f01602080910402602001604051908101604052809291908181526020018280546102ec90610b58565b80156103395780601f1061030e57610100808354040283529160200191610339565b820191906000526020600020905b81548152906001019060200180831161031c57829003601f168201915b5050505050908060030154905084565b6060806000808481548110610387577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201600101600085815481106103d2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600402016002016000868154811061041d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600402016003015482805461043b90610b58565b80601f016020809104026020016040519081016040528092919081815260200182805461046790610b58565b80156104b45780601f10610489576101008083540402835291602001916104b4565b820191906000526020600020905b81548152906001019060200180831161049757829003601f168201915b505050505092508180546104c790610b58565b80601f01602080910402602001604051908101604052809291908181526020018280546104f390610b58565b80156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b505050505091509250925092509193909250565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900460ff1681565b60035481565b600460009054906101000a900460ff16156105ad57600080fd5b60055442106105bb57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561061657600080fd5b600060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001428152509050600081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906106e0929190610758565b5060408201518160020190805190602001906106fd929190610758565b506060820151816003015550507fb34db44fe5c1e9e8fc7314c6180579042ca500d3f1296054814ffdcf7a405b913384844260405161073f949392919061098e565b60405180910390a1505050565b60025481565b60055481565b82805461076490610b58565b90600052602060002090601f01602090048101928261078657600085556107cd565b82601f1061079f57805160ff19168380011785556107cd565b828001600101855582156107cd579182015b828111156107cc5782518255916020019190600101906107b1565b5b5090506107da91906107de565b5090565b5b808211156107f75760008160009055506001016107df565b5090565b600061080e61080984610a81565b610a5c565b90508281526020810184848401111561082657600080fd5b610831848285610b16565b509392505050565b600082601f83011261084a57600080fd5b813561085a8482602086016107fb565b91505092915050565b60008135905061087281610c2a565b92915050565b6000806040838503121561088b57600080fd5b600083013567ffffffffffffffff8111156108a557600080fd5b6108b185828601610839565b925050602083013567ffffffffffffffff8111156108ce57600080fd5b6108da85828601610839565b9150509250929050565b6000602082840312156108f657600080fd5b600061090484828501610863565b91505092915050565b61091681610ace565b82525050565b61092581610ae0565b82525050565b600061093682610ab2565b6109408185610abd565b9350610950818560208601610b25565b61095981610c19565b840191505092915050565b61096d81610b0c565b82525050565b6000602082019050610988600083018461090d565b92915050565b60006080820190506109a3600083018761090d565b81810360208301526109b5818661092b565b905081810360408301526109c9818561092b565b90506109d86060830184610964565b95945050505050565b60006020820190506109f6600083018461091c565b92915050565b60006060820190508181036000830152610a16818661092b565b90508181036020830152610a2a818561092b565b9050610a396040830184610964565b949350505050565b6000602082019050610a566000830184610964565b92915050565b6000610a66610a77565b9050610a728282610b8a565b919050565b6000604051905090565b600067ffffffffffffffff821115610a9c57610a9b610bea565b5b610aa582610c19565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610ad982610aec565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b43578082015181840152602081019050610b28565b83811115610b52576000848401525b50505050565b60006002820490506001821680610b7057607f821691505b60208210811415610b8457610b83610bbb565b5b50919050565b610b9382610c19565b810181811067ffffffffffffffff82111715610bb257610bb1610bea565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610c3381610b0c565b8114610c3e57600080fd5b5056fea2646970667358221220b0e9976488b02cd1f92633c3979b77331f010e4eb98e8f1f62815abf0865c08c64736f6c63430008010033";
var contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"string","name":"phone","type":"string"},{"indexed":false,"internalType":"string","name":"nameHome","type":"string"},{"indexed":false,"internalType":"uint256","name":"visitTime","type":"uint256"}],"name":"AppendVisit","type":"event"},{"inputs":[],"name":"OPEN_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVisitors","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_home","type":"string"}],"name":"visit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"visitorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"visitors","outputs":[{"internalType":"address","name":"visitWallet","type":"address"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"home","type":"string"},{"internalType":"uint256","name":"visitTime","type":"uint256"}],"stateMutability":"view","type":"function"}];

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
function unixtoDateTime(unix_timestamp){
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var d = new Date(unix_timestamp * 1000);
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
	var myHome = document.getElementById('myHome').value;
	var visitTime = getDateTime();
	// web3.eth.defaultAccount = web3.eth.personal.getAccounts()[0]
	web3.eth.getAccounts(function(err, result){
		if(!err){
			console.log(result[0])
			web3.eth.personal.unlockAccount(result[0], "pass0", 0);
		}
		else{
			console.log(err)
		}
	});
	// from contract
	var contract = new web3.eth.Contract(contractABI, contractAddress);
	
	// call fallback
	var txSuccess = false;
	document.querySelector("#guess #message").innerHTML = "";
	document.querySelector("#guess #message3").innerHTML = "";
	document.querySelector("#guess #message2").innerHTML = "";
	

	contract.methods.visit(myPhone, myHome).send({from: fromAddress});
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
				contract.methods.getVisitors(index).call().then(function(result){
					if(result)
					{
						var row = `Time : ${unixtoDateTime(result[2])}  | Phone : ${result[0]}  | Home : ${result[1]}  <br/>`
						document.querySelector("#showVisitor #message").innerHTML += row;
								   
						console.log(result);
					}
					});
				}
		} 
		else{
			console.log(err);
		} 
	})

}, false)