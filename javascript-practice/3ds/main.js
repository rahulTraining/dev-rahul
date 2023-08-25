async function formSubmit() {
    const apiKey =  "1302cad93f3f7ae3539abc6358422c99";
    const script =  "https://api-sandbox.3dsintegrator.com/v2";
    await verifyCardWithThreeds(apiKey,script,"payment");
}


async function verifyCardWithThreeds(api_key,script,formId) {
	let totalAmt =150.13;
	console.log(totalAmt,"totalAmt",typeof totalAmt);
	console.log(formId,"formId");
	console.log(api_key,"api_key");
	console.log(script,"script");
	var tds = new ThreeDS(
		formId,
		api_key,
		null,
		{
			endpoint: script,
			autoSubmit: false,
			showChallenge: true,
			iframeId: "anotherUniqueID",
			challengeIndicator: '04',
			messageCategory: '01',
			verbose: true,
			forcedTimeout: '300', // set the forced timeout for 5minutes
			prompt: () => {
				console.log("user got challenged ############");
			}
		});
	console.log(tds,"tds");
	try {
		var response = await new Promise((resolve, reject) => {
			tds.verify(resolve, handleReject, {amount: totalAmt}, null, null);
		});
		console.log(response);
		// appendHiddenInputs(response,totalAmt);
		// if(response){
		// 	hideOverlayForFilters(false);
		// 	handleResponse(response);
		// }

	} catch (error) {
		// hideOverlayForFilters(false);
		console.log("error occured", error)
	}
}

function handleReject(error) {
	const errorArr = [];
	const errObj = JSON.parse(error);
	console.log("logs printing from handleReject function: Error", errObj);
	//No result found for transaction as yet. Please subscribe again
	// errObj['error'].search('Please subscribe again') < 0
	// Card not accepted -- errObj['error'].search('not accepted') < 0
	if(errObj && errObj['error'].search('No result found') != -1){
		// console.log("Error occured when challenge allowed", errObj['error'])
		errorArr.push(errObj);
	}
	else{
		// hideOverlayForFilters(false);
		// showErrorAndResetPaymentUI("Please enter valid card details");
		console.log(errObj['error']);
	}
}
