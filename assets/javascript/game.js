var myArtistNames = ["Logic", 
					 "Joey Badass", 
					 "Lecrae", 
					 "Knowledge Above All Nonsense", 
					 "Lupe Fiasco", 
					 "Oddisee", 
					 "Andy Mineo"];
var myAlpha = "abcdefghijklmnopqrstuvwxyz";
var lettersAlreadyGuessed = "";
var myRnd = Math.floor(Math.random()*myArtistNames.length);
var selectedArtist = myArtistNames[myRnd];
var tempGuessStr = selectedArtist.replace(/\s+/g,'').toLowerCase();
var myWin = 0;
var noGuess = 10;
var currentWord = "";
for (var i = 0; i < tempGuessStr.length; i++) {
	currentWord += "_";
}


console.log("The randomly selected Artist is: " + selectedArtist);
console.log("Modified to lower case with no space as follows (str len = "+tempGuessStr.length+"): " + tempGuessStr);
console.log("Modified to underscores (str len = "+ currentWord.length +"): "+currentWord);

document.onkeyup = function(event) {
	var userGuess = event.key;
	var tempUserGuess = userGuess.toLowerCase();
	//check if the key pressed exists within the 26 keys in the alpha numeric
	//and if the key exists as a letter in the tempGuessStr
	if (myAlpha.indexOf(tempUserGuess) > -1 
		&& tempGuessStr.indexOf(tempUserGuess) > -1 
		&& lettersAlreadyGuessed.indexOf(tempUserGuess) == -1) {
		//if it is in the 26-letter alphabet and is a letter that exist in the name of the artist
		lettersAlreadyGuessed += tempUserGuess;
		
		for(var j = 0; j < tempGuessStr.length; j++) {
			if(tempUserGuess == tempGuessStr[j]) {
				var tempCurrentWord = currentWord.split("");
				tempCurrentWord[j] = tempUserGuess;
				currentWord = tempCurrentWord.join("");
				document.getElementById("currentWord").innerHTML = currentWord.split("").join(" ");
			} else {
				//check code at this point
			}
		}
		
		if(currentWord.indexOf("_") == -1){
			myWin++;
			document.getElementById("currentWord").innerHTML = selectedArtist;
			console.log(myWin);
			noGuess = 10;
			document.getElementById("noGuesses").innerHTML = noGuess;
			document.getElementById("noWins").innerHTML = myWin;
			myRnd = Math.floor(Math.random()*myArtistNames.length);
			selectedArtist = myArtistNames[myRnd];
			tempGuessStr = selectedArtist.replace(/\s+/g,'').toLowerCase();
			currentWord = "";
			
			for (var i = 0; i < tempGuessStr.length; i++) {
				currentWord += "_";
			}
		
		} else if (noGuess == 0) {
			
			alert("Game Over");
			noGuess=10;
			document.getElementById("noGuesses").innerHTML = noGuess;
			
			myRnd = Math.floor(Math.random()*myArtistNames.length);
			selectedArtist = myArtistNames[myRnd];
			tempGuessStr = selectedArtist.replace(/\s+/g,'').toLowerCase();
			currentWord = "";
			
			for (var i = 0; i < tempGuessStr.length; i++) {
				currentWord += "_";
			}
		}

	} else {
		
		if(lettersAlreadyGuessed.indexOf(tempUserGuess) == -1) {
			noGuess--;
			document.getElementById("noGuesses").innerHTML = noGuess;
		}
	
	}
	
	document.getElementById("tempStr").innerHTML = lettersAlreadyGuessed;
	//require to check if the letter was already clicked on
}