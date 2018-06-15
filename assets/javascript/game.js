//Computer randomly picks a letter user does not know
//User guesses letter by pressing different keys
// If letter guesses is correct, computer picks another letter and register a W
// If Guesses left = 0, then computer picks another letter and register a L
//Each key pressed lowers gusses remaining

//create three variables that the user sees with initial starting values when game is initially fired up
var wins = 0;
var losses = 0;
var guessesLeft = 7;
//Establish an array of letters that the computer can choose from
var cpuLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// establish variable for game over, which when true, resets the game, guesses left but does not change the wins or losses
var gameOver = false;
// establish a variable for what letters user guesses and show that on screen and a
var lettersGuessed = [];

// establish a variable so the computer chooses a random letter from our cpuLetter variable array we made above and inserts it into the console
var computerGuess = cpuLetter[Math.floor(Math.random()*cpuLetter.length)];
		console.log(computerGuess);

// This function runs whenever the user presses a key (any key)
	document.onkeyup = function() {

//establish a variable for whatever key we press as the user's guess and make it lower case and insert into the console as the users guess
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
	

//This function resets the game back to the initial startup without affect wins or losses count
		function reset() {
		computerGuess=cpuLetter[Math.floor(Math.random() * cpuLetter.length)];
		console.log(computerGuess);

		guessesLeft=7;
		gameOver=false;
		lettersGuessed=[];

	}

// the function will trigger if any of these conditions are met and the gameOver variable is true. Appropriate win or loss will be recorded

lettersGuessed.push(userGuess);

		if (userGuess===computerGuess) {
			gameOver=true;
			wins++;
			alert("The letter was "+ computerGuess + " Wow, you're a psychic!!");
		}		
		
		else {
		guessesLeft--;
		}

		if (guessesLeft==0) {
			gameOver=true;
            losses++;
            alert("Tough luck, the letter was "+ computerGuess +" you're not a psychic!!")
		}

		if (gameOver==true) {
				reset();
		}
	
// letters guessed variable records whatever key we press through the userGuess variable we made
		
		
		
		

        var html = 
        "<div class='scoreboard' id='Guess'> Guess what letter I'm thinking of?" +
        "<div class='scoreboard' id='Wins'>Wins: " + wins + "</div>" +
        "<div class='scoreboard' id='Losses'>Losses: " + losses + "</div>" +
        "<div class='scoreboard' id='GuessesLeft'>Guesses Left: " + guessesLeft + "</div>" +
        "<div class='scoreboard' id='LettersGuessed'>Letters Guessed: " + lettersGuessed + "</div>";


		document.querySelector('#game').innerHTML = html;
		

	};