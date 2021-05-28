document.getElementById("guess").addEventListener("submit", function (e) {
    e.preventDefault();

	
    // var contractAddress = document.querySelector("#guess #contractAddress").value;
    var fromAddress = document.querySelector("#guess #fromAddress").value;
    // var privkey = document.querySelector("#guess #privkey").value;
    var myPhone = document.getElementById('myPhone').value;
	var myHome = document.getElementById('myHome').value;
	var visitTime = getDateTime();
	// web3.eth.defaultAccount = web3.eth.personal.getAccounts()[0]
	web3.eth.getAccounts(function(err, result){
		if(!err){
			web3.eth.personal.unlockAccount(result[0], "pass0", 0);
			$.ajax({
				url: '/get_session',
			    contentType: 'application/json',
			    timeout: 500,     // timeout milliseconds
			    success: function (data,status,xhr) {   // success callback function
			        console.log(data);
			        // from contract
					var contract = new web3.eth.Contract(contractABI, data.contractAddress);
					
					// call fallback
					var txSuccess = false;
					document.querySelector("#guess #message").innerHTML = "";
					document.querySelector("#guess #message3").innerHTML = "";
					document.querySelector("#guess #message2").innerHTML = "";
					

					contract.methods.visit(myPhone, myHome).send({from: fromAddress});
					document.querySelector("#guess #message2").innerHTML = "Attendance Time : "+visitTime;
			    },
			    error: function (jqXhr, textStatus, errorMessage) { // error callback 
			        console.log(errorMessage);
			    }
			});
		}
		else{
			console.log(err)
		}
	});

	
}, false);