var contractByteCode = '0x608060405261d2f060035534801561001657600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426002819055506000600460006101000a81548160ff021916908315150217905550600354426100889190610093565b600581905550610122565b600061009e826100e9565b91506100a9836100e9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156100de576100dd6100f3565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6106bf806101316000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063959c067211610066578063959c067214610137578063c2b6b58c14610153578063e1583c5f14610171578063ec8cb2811461018f578063fcf589d1146101ad57610093565b80630ba370241461009857806342b71a36146100b65780637138a0eb146100e85780638da5cb5b14610119575b600080fd5b6100a06101cb565b6040516100ad91906105ee565b60405180910390f35b6100d060048036038101906100cb91906104f3565b6101d7565b6040516100df93929190610573565b60405180910390f35b61010260048036038101906100fd91906104f3565b610231565b6040516101109291906105c5565b60405180910390f35b6101216102d5565b60405161012e9190610558565b60405180910390f35b610151600480360381019061014c91906104ca565b6102fb565b005b61015b61047b565b60405161016891906105aa565b60405180910390f35b61017961048e565b60405161018691906105ee565b60405180910390f35b610197610494565b6040516101a491906105ee565b60405180910390f35b6101b561049a565b6040516101c291906105ee565b60405180910390f35b60008080549050905090565b600081815481106101e757600080fd5b90600052602060002090600302016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154905083565b6000806000838154811061026e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160010154600084815481106102ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302016002015491509150915091565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900460ff161561031557600080fd5b600554421061032357600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561037e57600080fd5b600060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001838152602001428152509050600081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015550507feabc6e27074ab200e5762af2e48c852e06032bbab02753242a8e9bce0eaab02d33834260405161046f93929190610573565b60405180910390a15050565b600460009054906101000a900460ff1681565b60035481565b60025481565b60055481565b6000813590506104af8161065b565b92915050565b6000813590506104c481610672565b92915050565b6000602082840312156104dc57600080fd5b60006104ea848285016104a0565b91505092915050565b60006020828403121561050557600080fd5b6000610513848285016104b5565b91505092915050565b61052581610609565b82525050565b6105348161061b565b82525050565b61054381610627565b82525050565b61055281610651565b82525050565b600060208201905061056d600083018461051c565b92915050565b6000606082019050610588600083018661051c565b610595602083018561053a565b6105a26040830184610549565b949350505050565b60006020820190506105bf600083018461052b565b92915050565b60006040820190506105da600083018561053a565b6105e76020830184610549565b9392505050565b60006020820190506106036000830184610549565b92915050565b600061061482610631565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61066481610627565b811461066f57600080fd5b50565b61067b81610651565b811461068657600080fd5b5056fea264697066735822122006bb06d37d47681337e5691cc84bc98e15f4f2f5207d28ea749124cd54fe653c64736f6c63430008010033';
var contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"bytes32","name":"phone","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"visitTime","type":"uint256"}],"name":"AppendVisit","type":"event"},{"inputs":[],"name":"OPEN_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getVisitors","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_phone","type":"bytes32"}],"name":"visit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"visitorCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"visitors","outputs":[{"internalType":"address","name":"visitWallet","type":"address"},{"internalType":"bytes32","name":"phone","type":"bytes32"},{"internalType":"uint256","name":"visitTime","type":"uint256"}],"stateMutability":"view","type":"function"}];

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

document.getElementById("showVisitor").addEventListener("submit", function (e) {
    e.preventDefault();

	// ����ڰ� web�� �Է��� value���� ������
    var contractAddress = document.querySelector("#showVisitor #contractAddress").value;
    var privkey = document.querySelector("#showVisitor #privkey").value;
	web3.eth.defaultAccount = web3.eth.accounts[0]
	web3.personal.unlockAccount(web3.eth.defaultAccount, privkey, 0);

	// from contract
	var contract = web3.eth.contract(contractABI).at(contractAddress);
	//console.log(contract)

	//var amount = contract.amount();

	// call fallback
	var txSuccess = false;
	document.querySelector("#showVisitor #message").innerHTML = "";
	document.querySelector("#showVisitor #message3").innerHTML = "";
	document.querySelector("#showVisitor #message2").innerHTML = "";


	contract.getVisitors(1, function(error, result){
		if(!error)
		{
			document.querySelector("#showVisitor #message").innerHTML = result;
		   
	 		console.log(web3.eth.getTransaction(result));
			console.log(result.value);
		}
		else
			console.error(error);
		});

	// contract.visitorCount(function(error, value){
	// 	if(!error){
	// 		console.log(value)
			// for (var index = 0; index < 1; index++) {
			// 	console.log(index)
			// 	contract.getVisitors(index, function(error, result){
			// 		if(!error)
			// 		{
			// 			document.querySelector("#showVisitor #message").innerHTML += result;
			
			// 			// $("#attendance").html('Attendance Incremented to '+result[3]+' for '+result[0]+' '+result[1]);
					   
						
			// 			console.log(result);
			// 		}
			// 		else
			// 			console.error(error);
			// 		});
				
			// }
	// 	} else {
	// 		console.error(error);
	// 	}
	// })
	// contract.getVisitors(function(error, result){
	// 	if(!error)
	// 	{
	// 		document.querySelector("#showVisitor #message").innerHTML = result;

	// 		// $("#attendance").html('Attendance Incremented to '+result[3]+' for '+result[0]+' '+result[1]);
		   
			
	// 		console.log(result);
	// 	}
	// 	else
	// 		console.error(error);
	// 	});

	// var sendGuessTxTimer = window.setInterval(function() {
	// 	if (true) {
	// 		web3.eth.getTransactionCount(fromAddress, function (error, nonce) {
	// 			var rawTx = {
	// 				data: "0x"+getDateTime(),
	// 				from: fromAddress,
	// 				gasPrice: web3.toHex(web3.eth.gasPrice),
	// 				gasLimit: 8000000,
	// 				nonce: web3.toHex(nonce),
	// 			};

	// 			privkey = EthJS.Util.toBuffer(privkey, "hex");

	// 			var tx = new EthJS.Tx(rawTx);
	// 			tx.sign(privkey);
				
	// 			web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
	// 				if (!err) {
						
	// 					window.clearInterval(sendGuessTxTimer);
	// 					document.querySelector("#showVisitor #message2").innerHTML = "Attendee visit is mining...";
	// 					var getGuessReptTimer = window.setInterval(function() {
	// 						web3.eth.getTransactionReceipt(hash, function(err, result) {								
	// 							if (result)	{
	// 								window.clearInterval(getGuessReptTimer);
	// 								document.querySelector("#showVisitor #message2").innerHTML = "Attendance Time : "+visitTime+" Transaction Hash : " + hash;
	// 							}
	// 						})
	// 					}, 1000)
	// 				} else {
	// 					console.log("Error send")
	// 					document.querySelector("#showVisitor #message2").innerHTML = "Visit Transaction " + err;
	// 				}
	// 			})
	// 		})
	// 	}
	// }, 1000)
}, false)