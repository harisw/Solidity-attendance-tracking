var contractByteCode = '0x608060405261d2f060035534801561001657600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426002819055506000600460006101000a81548160ff021916908315150217905550600354426100889190610093565b600581905550610122565b600061009e826100e9565b91506100a9836100e9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156100de576100dd6100f3565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610772806101316000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c2b6b58c1161005b578063c2b6b58c14610117578063e1583c5f14610135578063ec8cb28114610153578063fcf589d11461017157610088565b806342b71a361461008d57806363180e37146100bf5780638da5cb5b146100dd578063959c0672146100fb575b600080fd5b6100a760048036038101906100a2919061048f565b61018f565b6040516100b6939291906105f4565b60405180910390f35b6100c76101e9565b6040516100d4919061062b565b60405180910390f35b6100e56102b2565b6040516100f291906105d9565b60405180910390f35b61011560048036038101906101109190610466565b6102d8565b005b61011f610417565b60405161012c919061064d565b60405180910390f35b61013d61042a565b60405161014a9190610668565b60405180910390f35b61015b610430565b6040516101689190610668565b60405180910390f35b610179610436565b6040516101869190610668565b60405180910390f35b6000818154811061019f57600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b60606000805480602002602001604051908101604052809291908181526020016000905b828210156102a957838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820154815250508152602001906001019061020d565b50505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900460ff16156102f257600080fd5b600554421061030057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561035b57600080fd5b600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155505050565b600460009054906101000a900460ff1681565b60035481565b60025481565b60055481565b60008135905061044b8161070e565b92915050565b60008135905061046081610725565b92915050565b60006020828403121561047857600080fd5b60006104868482850161043c565b91505092915050565b6000602082840312156104a157600080fd5b60006104af84828501610451565b91505092915050565b60006104c48383610579565b60608301905092915050565b6104d9816106bc565b82525050565b6104e8816106bc565b82525050565b60006104f982610693565b61050381856106ab565b935061050e83610683565b8060005b8381101561053f57815161052688826104b8565b97506105318361069e565b925050600181019050610512565b5085935050505092915050565b610555816106ce565b82525050565b610564816106da565b82525050565b610573816106da565b82525050565b60608201600082015161058f60008501826104d0565b5060208201516105a2602085018261055b565b5060408201516105b560408501826105bb565b50505050565b6105c481610704565b82525050565b6105d381610704565b82525050565b60006020820190506105ee60008301846104df565b92915050565b600060608201905061060960008301866104df565b610616602083018561056a565b61062360408301846105ca565b949350505050565b6000602082019050818103600083015261064581846104ee565b905092915050565b6000602082019050610662600083018461054c565b92915050565b600060208201905061067d60008301846105ca565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b60006106c7826106e4565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610717816106da565b811461072257600080fd5b50565b61072e81610704565b811461073957600080fd5b5056fea2646970667358221220e25786d059f80ab6e3e757a7d6052c7a8bd98b199654e212536cf338be8846d864736f6c63430008010033';
var contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"OPEN_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVisitors","outputs":[{"components":[{"internalType":"address","name":"visitWallet","type":"address"},{"internalType":"bytes32","name":"phone","type":"bytes32"},{"internalType":"uint256","name":"visitTime","type":"uint256"}],"internalType":"struct Place.Visitor[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_phone","type":"bytes32"}],"name":"visit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"visitors","outputs":[{"internalType":"address","name":"visitWallet","type":"address"},{"internalType":"bytes32","name":"phone","type":"bytes32"},{"internalType":"uint256","name":"visitTime","type":"uint256"}],"stateMutability":"view","type":"function"}];

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

function getAJAXObject() { // 3. AJAX ��ü�� �����ϴ� �Լ� ����
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
					// var coinContract = web3.eth.contract(coinContractABI);
					// var coinContractData = coinContract.new.getData( {data: coinContractByteCode});
					
					// second contract
					var contract = web3.eth.contract(contractABI);
					// var contractData = contract.new.getData(contractAddr1, answer, {data: contractByteCode});

					web3.eth.getTransactionCount(fromAddress, function(error, nonce){
						console.log("Error count")
						var rawTx = {
							from: fromAddress,
							gasPrice: web3.toHex(web3.eth.gasPrice),
							gasLimit: 8000000,
							nonce: web3.toHex(nonce),
							data: getDateTime(),
						};

						var tx = new EthJS.Tx(rawTx);
						tx.sign( EthJS.Util.toBuffer(privkey, "hex") );

						web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function(err, hash) {
							if (!err) {
								console.log("Error Send");
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
								document.querySelector("#deploy #message").innerHTML = err;
							}
						});
					})
					
	            }
	        }
	    }
	};
	request.send(null);
}, false);

// 5. ��Ʈ��Ʈ��  �ݾ��� betting
// Ʈ������� data �κ��� �����ϰ�, �ʿ��� gas�� ����ϰ� �����ϰ�, ��ε�ĳ������
// Ʈ����ǿ� �ʿ��� gas�� ����ϴ� ���� �����ּ� �� value ��ü�� �Ӽ����κ���  ��Ʈ��Ʈ �ּҸ� �Լ� ȣ��� �����ϸ�
// ��, from �ּ�, ��Ʈ��Ʈ �ּҿ� ���� ������ ���̰� ����.
// ��Ʈ��Ʈ�� �Լ��� ȣ���ϴ� �� �ʿ��� gas�� ã�� �� gas���� ������ �ִ� to, from, value �Ӽ� ���� ������ �� ����
document.getElementById("guess").addEventListener("submit", function (e) {
    e.preventDefault();

	// ����ڰ� web�� �Է��� value���� ������
    var contractAddress = document.querySelector("#guess #contractAddress").value;
    var fromAddress = document.querySelector("#guess #fromAddress").value;
    var privkey = document.querySelector("#guess #privkey").value;
    var myPhone = document.getElementById('myPhone').value;
	var visitTime = getDateTime();

	// from contract
	var contract = web3.eth.contract(contractABI).at(contractAddress);
	//var amount = contract.amount();

	// call fallback
	var txSuccess = false;
	document.querySelector("#guess #message").innerHTML = "";
	document.querySelector("#guess #message3").innerHTML = "";
	document.querySelector("#guess #message2").innerHTML = "";
	
	
	// web3.eth.getTransactionCount(fromAddress, function (error, nonce) {
		
	// 	var rawTx = {
	// 		data: "0x0000",
	// 		from: fromAddress,
	// 		gasPrice: web3.toHex(web3.eth.gasPrice),
	// 		gasLimit: 8000000,
	// 		nonce: web3.toHex(nonce),
	// 		to: contractAddress,
	// 		value: web3.toHex(amount), // ��Ʈ��Ʈ�� ���� ���þ�
	// 	};

	// 	privkey = EthJS.Util.toBuffer(privkey, "hex");

	// 	var tx = new EthJS.Tx(rawTx);
	// 	tx.sign(privkey);

	// 	web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
	// 		if (!err) {
	// 			var fallbackTimer = window.setInterval(function() {
	// 				document.querySelector("#guess #message").innerHTML = "Fallback Transaction Hash : " + hash;
	// 				document.querySelector("#guess #message3").innerHTML = "Loading Total Prize info...";
	// 				web3.eth.getTransactionReceipt(hash, function(err, result) {
	// 					if (result) {
	// 						txSuccess = true;
	// 						window.clearInterval(fallbackTimer);
	// 						document.querySelector("#guess #message3").innerHTML = "Total Prize : " + web3.fromWei(web3.eth.getBalance(contractAddress),"ether") +" ether";
	// 					}
	// 				})
	// 			}, 5000)
	// 		} else {
	// 			document.querySelector("#guess #message").innerHTML = "Fallback Transaction " + err;
	// 		}
	// 	})
	// })
	
	
	// ������ values�� �̿��Ͽ�, tx�� data �κ��� ����
	var contractData = contract.visit.getData(myPhone);
	
	var sendGuessTxTimer = window.setInterval(function() {
		if (true) {
			web3.eth.getTransactionCount(fromAddress, function (error, nonce) {
				var rawTx = {
					data: contractData, // guess() �Լ��� ���� ������
					from: fromAddress,
					gasPrice: web3.toHex(web3.eth.gasPrice),
					gasLimit: 8000000,
					nonce: web3.toHex(nonce),
					// to: contractAddress,
				};

				privkey = EthJS.Util.toBuffer(privkey, "hex");

				var tx = new EthJS.Tx(rawTx);
				tx.sign(privkey);
				
				web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
					if (!err) {
						
						window.clearInterval(sendGuessTxTimer);
						document.querySelector("#guess #message2").innerHTML = "Attendee visit is mining...";
						var getGuessReptTimer = window.setInterval(function() {
							web3.eth.getTransactionReceipt(hash, function(err, result) {								
								if (result)	{
									window.clearInterval(getGuessReptTimer);
									document.querySelector("#guess #message2").innerHTML = "Attendance Time : "+visitTime+" Transaction Hash : " + hash;
								}
							})
						}, 1000)
					} else {
						console.log("Error send")
						document.querySelector("#guess #message2").innerHTML = "Visit Transaction " + err;
					}
				})
			})
		}
	}, 1000)
}, false)

// 6. ��Ʈ��Ʈ ������ ǥ��
// document.getElementById("reveal").addEventListener("submit", function(e){
//     e.preventDefault();

//     // from HTML
// 	var contractAddress = document.querySelector("#reveal #contractAddress").value;
//     var receivAddr = document.querySelector("#reveal #fromAddress").value;
//     var privkey = document.querySelector("#reveal #privkey").value;
	
//     // from contract in Geth
// 	var contract = web3.eth.contract(contractABI).at(contractAddress);
// 	//var withdrawn = contract.withdrawn();
// 	// ������ values�� �̿��Ͽ�, tx�� data �κ��� ����
// 	var contractData = contract.reveal.getData();
	
	
// 	web3.eth.getTransactionCount(receivAddr, function (error, nonce) {
// 		var rawTx = {
// 			data: contractData,
// 			from: receivAddr,
// 			gasPrice: web3.toHex(web3.eth.gasPrice),
// 			gasLimit: 8000000,
// 			nonce: web3.toHex(nonce),
// 			to: contractAddress,
// 			value: "0x0", // msg.value
// 		};

// 		privkey = EthJS.Util.toBuffer(privkey, "hex");

// 		var tx = new EthJS.Tx(rawTx);
// 		tx.sign(privkey);

// 		var isFinish = contract.isGameFinish.call();
// 		// if(isFinish == false){
// 		// 	alert("wait until quiz is over")
// 		// 	return;
// 		// }
// 		web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
// 			if (!err) {
// 				var coinContract = web3.eth.contract(coinContractABI).at(contractAddr1);
// 				document.querySelector("#reveal #message").innerHTML = "Transaction Hash : " + hash + "</br></br>"
// 				reward = coinContract.getBalance.call(receivAddr);
// 				if(reward == 0){
// 					document.querySelector("#reveal #message").innerHTML = document.querySelector("#reveal #message").innerHTML + "Your answer was not correct";
// 				} else {
// 					document.querySelector("#reveal #message").innerHTML = document.querySelector("#reveal #message").innerHTML + "Your answer was correct!! you earned " + web3.fromWei(reward, "ether")+ "ether";
// 				}
// 			} else {
// 				document.querySelector("#reveal #message").innerHTML = err;
// 			}
// 		})
// 	})
	
// }, false);