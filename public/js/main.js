// 0. QuizCoin 컨트랙트 Bytecode와 ABI를  변수에 저장
var coinContractByteCode = "6060604052341561000f57600080fd5b5b6102838061001f6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806370a0823114610054578063a9059cbb146100a1578063f8b2cb4f146100e3575b600080fd5b341561005f57600080fd5b61008b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610130565b6040518082815260200191505060405180910390f35b34156100ac57600080fd5b6100e1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610148565b005b34156100ee57600080fd5b61011a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061020e565b6040518082815260200191505060405180910390f35b60006020528060005260406000206000915090505481565b6000811015151561015857600080fd5b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b9190505600a165627a7a72305820b9d692242aacaa6f5db22d8f53a38dd76d2384af0b72851b500d1a43e213346b0029";
var coinContractABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];

// 1. QuizGame 컨트랙트 Bytecode와 ABI를  변수에 저장


var contractByteCode = "6060604052341561000f57600080fd5b604051610bef380380610bef833981016040528080519060200190919080518201919050505b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610110600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166100f8836101ae6401000000000261093b176401000000009004565b6101df64010000000002610635176401000000009004565b60026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020816000191690555060b4420160038190555060006005819055506000600460006101000a81548160ff0219169083151502179055505b505061021c565b60006101b8610208565b8290506000815114156101d157600060010291506101d9565b602083015191505b50919050565b600081604051808260001916600019168152602001915050604051809103902090505b92915050565b602060405190810160405280600081525090565b6109c48061022b6000396000f300606060405236156100c3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302d05d3f146101cb57806325235c6e1461022057806341b5100d146102495780634eee59b31461027257806369f848c4146102cf5780636aef3cdc1461032457806388143c9c1461034d5780638ec87bd0146103af57806396305413146103d8578063a475b5dd14610405578063c80ec5221461041a578063cfb5192814610447578063e8fcf723146104c0575b5b600354421015156100d457600080fd5b600460009054906101000a900460ff161515156100f057600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561014d57600080fd5b346005600082825401925050819055507ff4741164ec268c2c0ee994d7a5fdf02db6f72358cc6dfb8d0d9918d49209858e3334604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b005b34156101d657600080fd5b6101de610515565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022b57600080fd5b61023361053b565b6040518082815260200191505060405180910390f35b341561025457600080fd5b61025c610540565b6040518082815260200191505060405180910390f35b341561027d57600080fd5b6102cd600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610546565b005b34156102da57600080fd5b6102e2610607565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561032f57600080fd5b61033761062c565b6040518082815260200191505060405180910390f35b341561035857600080fd5b610391600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803560001916906020019091905050610635565b60405180826000191660001916815260200191505060405180910390f35b34156103ba57600080fd5b6103c261065e565b6040518082815260200191505060405180910390f35b34156103e357600080fd5b6103eb610664565b604051808215151515815260200191505060405180910390f35b341561041057600080fd5b610418610686565b005b341561042557600080fd5b61042d610928565b604051808215151515815260200191505060405180910390f35b341561045257600080fd5b6104a2600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061093b565b60405180826000191660001916815260200191505060405180910390f35b34156104cb57600080fd5b6104f7600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061096c565b60405180826000191660001916815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60b481565b60035481565b6003544210151561055657600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515156105b357600080fd5b6105bc8161093b565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055505b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60004290505b90565b600081604051808260001916600019168152602001915050604051809103902090505b92915050565b60055481565b60006003544210156106795760009050610683565b60019050610683565b5b90565b600460009054906101000a900460ff161515156106a257600080fd5b6106aa610664565b156109255760026000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460001916610780600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610635565b600019161415610924576001600460006101000a81548160ff0219169083151502179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb336005546040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b151561086a57600080fd5b6102c65a03f1151561087b57600080fd5b5050503373ffffffffffffffffffffffffffffffffffffffff166108fc6005549081150290604051600060405180830381858888f19350505050507fc7007e57228f610de89c329174bb69f87ecbecaf8e44c0e45ef6c83c21a8027933600554604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15b5b5b565b600460009054906101000a900460ff1681565b6000610945610984565b82905060008151141561095e5760006001029150610966565b602083015191505b50919050565b60026020528060005260406000206000915090505481565b6020604051908101604052806000815250905600a165627a7a72305820b25d636775a8260196a4dfdd8f51a81527c70640ef46940e5b3e5fb546f25fdf0029";
var contractABI = [{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"GUESS_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"guessDeadline","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_commitment","type":"string"}],"name":"guess","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prizeContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"testCurrentTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"},{"name":"answer","type":"bytes32"}],"name":"createCommitment","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totPrize","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isGameFinish","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reveal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"withdrawn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes32","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"commitments","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_prizeContractAddr","type":"address"},{"name":"_commitment","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"backer","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"ReservedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"WithdrawalToken","type":"event"}];

// 2. testnet에 연결된  web3 객체 생성
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

function getAJAXObject() { // 3. AJAX 객체를 리턴하는 함수 구현
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

var contractAddr1;

// 4. 컨트랙트 배포
document.getElementById("deploy").addEventListener("submit", function(e){
	e.preventDefault();

	var fromAddress = document.querySelector("#deploy #fromAddress").value;
	var privkey = document.querySelector("#deploy #privkey").value;
	var answer = document.querySelector("#deploy #commitment").value;
	var url = "/getURL?fromAddress=" + fromAddress + "&passwd=" + privkey + "&commitment=" + answer;
	var request = getAJAXObject();

	request.open("GET", url);
	
	request.onreadystatechange = function() {
	    if (request.readyState == 4) {
	        if (request.status == 200) {
	            if(request.responseText != "An error occured") {
					var coinContract = web3.eth.contract(coinContractABI);
					var coinContractData = coinContract.new.getData( {data: coinContractByteCode});
					
					
					web3.eth.getTransactionCount(fromAddress, function(error, nonce){
						var rawTx1 = {
							from: fromAddress,
							gasPrice: web3.toHex(web3.eth.gasPrice),
							gasLimit: 30000000,
							nonce: web3.toHex(nonce),
							data: "0x" + coinContractData,
						};

						var tx1 = new EthJS.Tx(rawTx1);
						tx1.sign( EthJS.Util.toBuffer(privkey, "hex") );

						web3.eth.sendRawTransaction("0x" + tx1.serialize().toString("hex"), function(err, hash) {
							if (!err) {
								document.querySelector("#deploy #message1").innerHTML = "QuizCoin Transaction Hash : " + hash + ".<br>Transaction is mining...";

								var timer = window.setInterval(function() {
									web3.eth.getTransactionReceipt(hash, function(err, result) {
										if (result) 	{
											window.clearInterval(timer);
											document.querySelector("#deploy #message1").innerHTML = "QuizCoin Transaction Hash : " + hash + "</br></br>QuizCoin Contract address : </br>" + result.contractAddress;
											
											contractAddr1 = result.contractAddress;
											
											// second contract
											var contract = web3.eth.contract(contractABI);
											var contractData = contract.new.getData(contractAddr1, answer, {data: contractByteCode});
											
											
											web3.eth.getTransactionCount(fromAddress, function(error, nonce){
												var rawTx = {
													from: fromAddress,
													gasPrice: web3.toHex(web3.eth.gasPrice),
													gasLimit: 30000000,
													nonce: web3.toHex(nonce),
													data: "0x" + contractData,
												};

												var tx = new EthJS.Tx(rawTx);
												tx.sign( EthJS.Util.toBuffer(privkey, "hex") );

												web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function(err, hash) {
													if (!err) {
														document.querySelector("#deploy #message").innerHTML = "QuizGame Transaction Hash : " + hash + ".<br>Transaction is mining...";

														var timer = window.setInterval(function() {
															web3.eth.getTransactionReceipt(hash, function(err, result) {
																if (result) {
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
									})
								}, 3000) // 3s
							} else {
								document.querySelector("#deploy #message1").innerHTML = err;
							}
						});
					})
	            }
	        }
	    }
	};
	request.send(null);
}, false);

// 5. 컨트랙트에  금액을 betting
// 트랜잭션의 data 부분을 생성하고, 필요한 gas량 계산하고 서명하고, 브로드캐스팅함
// 트랜잭션에 필요한 gas를 계싼하는 동안 계정주소 및 value 객체의 속성으로부터  컨트랙트 주소를 함수 호출로 전달하며
// 값, from 주소, 컨트랙트 주소에 따라 가스에 차이가 난다.
// 컨트랙트의 함수를 호출하는 데 필요한 gas를 찾을 때 gas값에 영향을 주는 to, from, value 속성 값을 전달할 수 있음
document.getElementById("guess").addEventListener("submit", function (e) {
    e.preventDefault();

	// 사용자가 web에 입력한 value들을 가져옴
    var contractAddress = document.querySelector("#guess #contractAddress").value;
    var fromAddress = document.querySelector("#guess #fromAddress").value;
    var privkey = document.querySelector("#guess #privkey").value;
    var myAnswer = document.getElementById('myAnswer').value;
	var amount = document.getElementById("amount").value; // 베팅액
	amount = web3.toWei(amount, "ether")

	// from contract
	var contract = web3.eth.contract(contractABI).at(contractAddress);
	//var amount = contract.amount();

	// call fallback
	var txSuccess = false;
	document.querySelector("#guess #message").innerHTML = "";
	document.querySelector("#guess #message3").innerHTML = "";
	document.querySelector("#guess #message2").innerHTML = "";
	
	
	web3.eth.getTransactionCount(fromAddress, function (error, nonce) {
		
		var rawTx = {
			data: "0x0000",
			from: fromAddress,
			gasPrice: web3.toHex(web3.eth.gasPrice),
			gasLimit: 30000000,
			nonce: web3.toHex(nonce),
			to: contractAddress,
			value: web3.toHex(amount), // 컨트랙트에 보낼 베팅액
		};

		privkey = EthJS.Util.toBuffer(privkey, "hex");

		var tx = new EthJS.Tx(rawTx);
		tx.sign(privkey);

		web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
			if (!err) {
				var fallbackTimer = window.setInterval(function() {
					document.querySelector("#guess #message").innerHTML = "Fallback Transaction Hash : " + hash;
					document.querySelector("#guess #message3").innerHTML = "Loading Total Prize info...";
					web3.eth.getTransactionReceipt(hash, function(err, result) {
						if (result) {
							txSuccess = true;
							window.clearInterval(fallbackTimer);
							document.querySelector("#guess #message3").innerHTML = "Total Prize : " + web3.fromWei(web3.eth.getBalance(contractAddress),"ether") +" ether";
						}
					})
				}, 5000)
			} else {
				document.querySelector("#guess #message").innerHTML = "Fallback Transaction " + err;
			}
		})
	})
	
	
	// 가져온 values을 이용하여, tx의 data 부분을 생성
	var contractData = contract.guess.getData(myAnswer);
	
	var sendGuessTxTimer = window.setInterval(function() {
		if (txSuccess == true) {
			web3.eth.getTransactionCount(fromAddress, function (error, nonce) {
				var rawTx = {
					data: contractData, // guess() 함수에 대한 데이터
					from: fromAddress,
					gasPrice: web3.toHex(web3.eth.gasPrice),
					gasLimit: 30000000,
					nonce: web3.toHex(nonce),
					to: contractAddress,
				};

				privkey = EthJS.Util.toBuffer(privkey, "hex");

				var tx = new EthJS.Tx(rawTx);
				tx.sign(privkey);
				
				web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
					if (!err) {
						window.clearInterval(sendGuessTxTimer);
						document.querySelector("#guess #message2").innerHTML = "Guess Transaction is mining...";
						var getGuessReptTimer = window.setInterval(function() {
							web3.eth.getTransactionReceipt(hash, function(err, result) {								
								if (result)	{
									window.clearInterval(getGuessReptTimer);
									document.querySelector("#guess #message2").innerHTML = "Guess Transaction Hash : " + hash;
								}
							})
						}, 1000)
					} else {
						document.querySelector("#guess #message2").innerHTML = "Guess Transaction " + err;
					}
				})
			})
		}
	}, 1000)
}, false)

// 6. 컨트랙트 정보를 표시
document.getElementById("reveal").addEventListener("submit", function(e){
    e.preventDefault();

    // from HTML
	var contractAddress = document.querySelector("#reveal #contractAddress").value;
    var receivAddr = document.querySelector("#reveal #fromAddress").value;
    var privkey = document.querySelector("#reveal #privkey").value;
	
    // from contract in Geth
	var contract = web3.eth.contract(contractABI).at(contractAddress);
	//var withdrawn = contract.withdrawn();
	// 가져온 values을 이용하여, tx의 data 부분을 생성
	var contractData = contract.reveal.getData();
	
	
	web3.eth.getTransactionCount(receivAddr, function (error, nonce) {
		var rawTx = {
			data: contractData,
			from: receivAddr,
			gasPrice: web3.toHex(web3.eth.gasPrice),
			gasLimit: 30000000,
			nonce: web3.toHex(nonce),
			to: contractAddress,
			value: "0x0", // msg.value
		};

		privkey = EthJS.Util.toBuffer(privkey, "hex");

		var tx = new EthJS.Tx(rawTx);
		tx.sign(privkey);

		var isFinish = contract.isGameFinish.call();
		if(isFinish == false){
			alert("wait until quiz is over")
			return;
		}
		web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function (err, hash) {
			if (!err) {
				var coinContract = web3.eth.contract(coinContractABI).at(contractAddr1);
				document.querySelector("#reveal #message").innerHTML = "Transaction Hash : " + hash + "</br></br>"
				reward = coinContract.getBalance.call(receivAddr);
				if(reward == 0){
					document.querySelector("#reveal #message").innerHTML = document.querySelector("#reveal #message").innerHTML + "Your answer was not correct";
				} else {
					document.querySelector("#reveal #message").innerHTML = document.querySelector("#reveal #message").innerHTML + "Your answer was correct!! you earned " + web3.fromWei(reward, "ether")+ "ether";
				}
			} else {
				document.querySelector("#reveal #message").innerHTML = err;
			}
		})
	})
	
}, false);