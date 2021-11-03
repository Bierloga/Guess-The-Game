let name = prompt("What is your name?");
alert("Hey " + name + ", good to see you! We are going to play a game!");
alert("You have to guess a number in a range of your own choosing. You can try 5 times")

let minRange = parseInt(prompt("What is the starting point of your range?"))
let maxRange = parseInt(prompt("What is the ending point of your range?"))
console.log("Full range is from " + minRange + " to " + maxRange)

let numberGenerator = function () {
    let generatedNumber = (Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange);
    console.log("generatedNumber is " + generatedNumber)
    return generatedNumber
};

//Eerst was lijn 19 'numberGenerator()' en lijn 24 'if(generatedNumber == guess) {' maar dan gaven de developer tools aan dat
// generatedNumber undefined was. Waarom? Nadat ik de functie heb gecalled hangt daar toch een waarde aan die door de functie gereturned is?
//Graag feedback hierover

let correctNumber = numberGenerator();
// Onderstaande console.log is om te kunnen testen of de code goed werkt bij een correct antwoord. Of om vals te spelen.
console.log("Correctnumber is" + correctNumber)
let guess = prompt("Guess a number.");
for (let i = 0; i <= 4; i++) {
    if (correctNumber == guess) {
        alert("Congratulations, that was the right answer!")
        break;
    } else {
        alert("Sorry, that was incorrect. " + (4 - i) + " times remaining.")
        if (i == 4) {
            alert("Sorry, you didn't get the right answer.")
        } else {
            let guess = prompt("Guess a number.")
        };
    }
}
alert("Thank you for playing this game!")
alert("See you next time, " + name)












