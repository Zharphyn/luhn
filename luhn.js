
function compareArray(Original, Comparitor){
    if (Original.length === Comparitor.length){
        for (var i = 0; i < Original.length; i++){
            if (Original[i] !== Comparitor[i]) {
                return false;
            }
        }
    } else {
        return false;
    }
    return true;
}

/*
Function receives a cardnumber, and then breaks it apart push each number into separate elements
in a string.
Returns: array
*/
function convertCardNumberToArray(cardNumber){
	return cardNumber.toString().split();
}

function calculateLundArray(cardNumberArray){
	var luhnArray = [];
	var flip = false;
	for (var i = cardNumberArray.length -1; i >= 0; i--){
		if (flip) {
			var luhnCalc = cardNumberArray[i] * 2;
			if (luhnCalc > 9){
				luhnCalc -= 9;
			}
			luhnArray[i].push(luhnCalc);
		} else {
			luhnArray[i].push(cardNumberArray[i]);
		}
		flip = !flip;
	}
	return luhnArray;
}


/*
receives the card number, then starts calling functions to perform the Lund test
*/
function checkLuhn(cardNumber){
	var cardNumberArray = convertCardNumberToArray(cardNumber);
	var luhnNumberArray = calculateLundArray(cardNumberArray);

}

exports.compareArray = compareArray;
exports.convertCardNumberToArray = convertCardNumberToArray;
exports.calculateLundArray = calculateLundArray;
exports.checkLuhn = checkLuhn;
