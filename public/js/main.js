var contractByteCode = "0x608060405261d2f06004553480156200001757600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600d81526020017f44656661756c7420506c6163650000000000000000000000000000000000000081525060029080519060200190620000a6929190620000e5565b50426003819055506000600560006101000a81548160ff02191690831515021790555060045442620000d9919062000195565b60068190555062000290565b828054620000f390620001fc565b90600052602060002090601f01602090048101928262000117576000855562000163565b82601f106200013257805160ff191683800117855562000163565b8280016001018555821562000163579182015b828111156200016257825182559160200191906001019062000145565b5b50905062000172919062000176565b5090565b5b808211156200019157600081600090555060010162000177565b5090565b6000620001a282620001f2565b9150620001af83620001f2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620001e757620001e662000232565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200021557607f821691505b602082108114156200022c576200022b62000261565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b610f0080620002a06000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063e1583c5f11610071578063e1583c5f14610194578063e8a61198146101b2578063ec8cb281146101ce578063f22ccf3f146101ec578063fbbf93a01461020a578063fcf589d11461022a576100b4565b80630ba37024146100b95780633e8a8009146100d757806342b71a36146100f35780637138a0eb146101265780638da5cb5b14610158578063c2b6b58c14610176575b600080fd5b6100c1610248565b6040516100ce9190610cca565b60405180910390f35b6100f160048036038101906100ec9190610a60565b610254565b005b61010d60048036038101906101089190610b0d565b61026e565b60405161011d9493929190610bb7565b60405180910390f35b610140600480360381019061013b9190610b0d565b6103de565b60405161014f93929190610c85565b60405180910390f35b6101606105e9565b60405161016d9190610b9c565b60405180910390f35b61017e61060f565b60405161018b9190610c48565b60405180910390f35b61019c610622565b6040516101a99190610cca565b60405180910390f35b6101cc60048036038101906101c79190610aa1565b610628565b005b6101d66107e1565b6040516101e39190610cca565b60405180910390f35b6101f46107e7565b6040516102019190610c63565b60405180910390f35b610212610875565b60405161022193929190610c0a565b60405180910390f35b61023261093a565b60405161023f9190610cca565b60405180910390f35b60008080549050905090565b806002908051906020019061026a929190610940565b5050565b6000818154811061027e57600080fd5b90600052602060002090600402016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546102c790610de1565b80601f01602080910402602001604051908101604052809291908181526020018280546102f390610de1565b80156103405780601f1061031557610100808354040283529160200191610340565b820191906000526020600020905b81548152906001019060200180831161032357829003601f168201915b50505050509080600201805461035590610de1565b80601f016020809104026020016040519081016040528092919081815260200182805461038190610de1565b80156103ce5780601f106103a3576101008083540402835291602001916103ce565b820191906000526020600020905b8154815290600101906020018083116103b157829003601f168201915b5050505050908060030154905084565b606080600080848154811061041c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906004020160010160008581548110610467577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201600201600086815481106104b2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060040201600301548280546104d090610de1565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90610de1565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b5050505050925081805461055c90610de1565b80601f016020809104026020016040519081016040528092919081815260200182805461058890610de1565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b505050505091509250925092509193909250565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900460ff1681565b60045481565b600560009054906101000a900460ff161561064257600080fd5b600654421061065057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156106ab57600080fd5b600060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001428152509050600081908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610775929190610940565b506040820151816002019080519060200190610792929190610940565b506060820151816003015550507fb34db44fe5c1e9e8fc7314c6180579042ca500d3f1296054814ffdcf7a405b91338484426040516107d49493929190610bb7565b60405180910390a1505050565b60035481565b600280546107f490610de1565b80601f016020809104026020016040519081016040528092919081815260200182805461082090610de1565b801561086d5780601f106108425761010080835404028352916020019161086d565b820191906000526020600020905b81548152906001019060200180831161085057829003601f168201915b505050505081565b600060606000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660026003548180546108af90610de1565b80601f01602080910402602001604051908101604052809291908181526020018280546108db90610de1565b80156109285780601f106108fd57610100808354040283529160200191610928565b820191906000526020600020905b81548152906001019060200180831161090b57829003601f168201915b50505050509150925092509250909192565b60065481565b82805461094c90610de1565b90600052602060002090601f01602090048101928261096e57600085556109b5565b82601f1061098757805160ff19168380011785556109b5565b828001600101855582156109b5579182015b828111156109b4578251825591602001919060010190610999565b5b5090506109c291906109c6565b5090565b5b808211156109df5760008160009055506001016109c7565b5090565b60006109f66109f184610d0a565b610ce5565b905082815260208101848484011115610a0e57600080fd5b610a19848285610d9f565b509392505050565b600082601f830112610a3257600080fd5b8135610a428482602086016109e3565b91505092915050565b600081359050610a5a81610eb3565b92915050565b600060208284031215610a7257600080fd5b600082013567ffffffffffffffff811115610a8c57600080fd5b610a9884828501610a21565b91505092915050565b60008060408385031215610ab457600080fd5b600083013567ffffffffffffffff811115610ace57600080fd5b610ada85828601610a21565b925050602083013567ffffffffffffffff811115610af757600080fd5b610b0385828601610a21565b9150509250929050565b600060208284031215610b1f57600080fd5b6000610b2d84828501610a4b565b91505092915050565b610b3f81610d57565b82525050565b610b4e81610d69565b82525050565b6000610b5f82610d3b565b610b698185610d46565b9350610b79818560208601610dae565b610b8281610ea2565b840191505092915050565b610b9681610d95565b82525050565b6000602082019050610bb16000830184610b36565b92915050565b6000608082019050610bcc6000830187610b36565b8181036020830152610bde8186610b54565b90508181036040830152610bf28185610b54565b9050610c016060830184610b8d565b95945050505050565b6000606082019050610c1f6000830186610b36565b8181036020830152610c318185610b54565b9050610c406040830184610b8d565b949350505050565b6000602082019050610c5d6000830184610b45565b92915050565b60006020820190508181036000830152610c7d8184610b54565b905092915050565b60006060820190508181036000830152610c9f8186610b54565b90508181036020830152610cb38185610b54565b9050610cc26040830184610b8d565b949350505050565b6000602082019050610cdf6000830184610b8d565b92915050565b6000610cef610d00565b9050610cfb8282610e13565b919050565b6000604051905090565b600067ffffffffffffffff821115610d2557610d24610e73565b5b610d2e82610ea2565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000610d6282610d75565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610dcc578082015181840152602081019050610db1565b83811115610ddb576000848401525b50505050565b60006002820490506001821680610df957607f821691505b60208210811415610e0d57610e0c610e44565b5b50919050565b610e1c82610ea2565b810181811067ffffffffffffffff82111715610e3b57610e3a610e73565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610ebc81610d95565b8114610ec757600080fd5b5056fea26469706673582212209ab1702567efa78af83983c0241ca1c560fba470220269ffab0d210878356b3664736f6c63430008010033";
var contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"string","name":"phone","type":"string"},{"indexed":false,"internalType":"string","name":"nameHome","type":"string"},{"indexed":false,"internalType":"uint256","name":"visitTime","type":"uint256"}],"name":"AppendVisit","type":"event"},{"inputs":[],"name":"OPEN_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDetails","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVisitors","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"placeName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_place","type":"string"}],"name":"setDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_phone","type":"string"},{"internalType":"string","name":"_home","type":"string"}],"name":"visit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"visitorCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"visitors","outputs":[{"internalType":"address","name":"visitWallet","type":"address"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"home","type":"string"},{"internalType":"uint256","name":"visitTime","type":"uint256"}],"stateMutability":"view","type":"function"}];

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
	var placeName = document.querySelector("#deploy #placeName").value;

	var url = "/getURL?fromAddress=" + fromAddress + "&passwd=" + privkey;
	var request = getAJAXObject();


	web3.eth.personal.unlockAccount(fromAddress, "pass0", 0);

	request.open("GET", url);
	
	request.onreadystatechange = function() {
	    if (request.readyState == 4) {
	        if (request.status == 200) {
	            if(request.responseText != "An error occured") {
					// second contract
					var contract = new web3.eth.Contract(contractABI);
					// var contractData = contract.new.getData(placeName, {data: contractByteCode});

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
								document.querySelector("#deploy #message").innerHTML = "Transaction Hash : " + hash + ".<br>Transaction is mining...";

								var timer = window.setInterval(function() {
									console.log("Receipt mana?")
									web3.eth.getTransactionReceipt(hash, function(err, result) {
										if (result) {
											console.log("Dapat receipt")
											window.clearInterval(timer);
											document.querySelector("#deploy #message").innerHTML = "Transaction Hash : " + hash + "</br></br>Contract address : </br>" + result.contractAddress;
											var contract1 = new web3.eth.Contract(contractABI, result.contractAddress)
											contract1.methods.setDetails(placeName).send({from: fromAddress});
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
	
	web3.eth.personal.unlockAccount(fromAddress, privkey, 100);

	contract.methods.visit(myPhone, myHome).send({from: fromAddress})
	.on('transactionHash', function(hash){
		document.querySelector("#guess #message").innerHTML = "Transaction Hash : <br>" + hash + "Mining...";
	})
	.on('receipt',function(receipt){
		console.log(receipt)
		document.querySelector("#guess #message").innerHTML = "Transaction Hash : <br>" + hash;
		document.querySelector("#guess #message2").innerHTML = "Gas Used : </br>" + receipt.gasUsed;
		document.querySelector("#guess #message3").innerHTML = "Attendance Time : "+visitTime;
	})
	;
	
	
}, false)

document.getElementById("showVisitor").addEventListener("submit", function (e) {
    e.preventDefault();

	// ����ڰ� web�� �Է��� value���� ������
    var contractAddress = document.querySelector("#showVisitor #contractAddress").value;
    // var privkey = document.querySelector("#showVisitor #privkey").value;


	// from contract
	var contract = new web3.eth.Contract(contractABI, contractAddress);
	
	// call fallback
	var txSuccess = false;
	document.querySelector("#showVisitor #message").innerHTML = "";
	document.querySelector("#showVisitor #message3").innerHTML = "";
	document.querySelector("#showVisitor #message2").innerHTML = "";
	// console.log(contract)

	contract.methods.getDetails().call().then(function(result){
		if(result)
		{
			var row = `Open Time : ${unixtoDateTime(result[2])}  | Place Name : ${result[1]}  | Owner Account Address : ${result[0]}  <br/>`
			document.querySelector("#showVisitor #message").innerHTML += row;
			console.log(result);
		}
	});


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