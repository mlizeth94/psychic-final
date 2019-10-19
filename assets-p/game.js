var computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];
// Creates an array that lists out all of the options ().
var alphabet = ["a", "b", "c", "d" ,"e"];

//var alphabet = ["a", "b", "c", "d" ,"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// This function is run whenever the user presses a key.

var remainingGuesses = function () {
    document.querySelector("#remaining").innerHTML = remainingGuesses;
};

var guessesMade = function () {
    document.querySelector("#guesses-made").innerHTML = guessesMade.join(",");
};

var computerGuess = function () {
    document.computerGuess = my_array[Math.floor(Math.random() * my_array.length)];
}:

var reset = function () {
    remainingGuesses = 9;
    guessesMade = [];
    computerGuess ();
    remainingGuessesCount();
    guessesMade();
};

computerGuess();
remainingGuesses();

document.onkeyup = function (key) {
    remainingGuesses--;

    var enteredGuess = String.fromCharCode(key.which).toLowerCase();
}

    guessedLetter.push(typedLetter);

    remainingGuessesCount();
    guessesMade();

    if (enteredGuess === computerGuess) {
        wins++;

        document.querySelector("wins").innerHTML = wins;

        reset();
    }

    if (remainingGuesses === 0) {
        losses+++;

        document.querySelector("#losses").innerHTML = losses;
    };


        var computerChoices = alphabet[Math.floor(Math.random() * alphabet.length)];

    


  