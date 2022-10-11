const randomNumber = Math.floor(Math.random() * 99);
let linea = Array.from(
    { length: 15 },
    () => Math.floor(Math.random() * 99) + 1
);
const numberToGuess = [];
const usedNumbers = [];
let rounds = 0;
let won = false;
let isPlaying = true;

const bingoCard = [
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
];

const generateNumberToGuess = () => {
    for (let i = 0; i < bingoCard.length; i++) {
        numberToGuess.push({ number: linea[i], matched: false });
    }
};

const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    if (usedNumbers.includes(randomNumber)) {
        return getRandomNumber();
    }
    usedNumbers.push(randomNumber);
    return randomNumber;
};

const newTurn = () => {
    const randomNumber = getRandomNumber();
    console.log(`Your number is... ¡${randomNumber}!`);

    numberToGuess.forEach((numBingo) => {
        if (numBingo.number === randomNumber) {
            numBingo.number = bingoCard.number = 'X';
            numBingo.matched = true;
            alert(`NUMBER MATCHED: ¡${randomNumber}!`);
        }
    });
    rounds++;
};

const checkIfWin = () => {
    for (let i = 0; i < numberToGuess.length; i++) {
        if (numberToGuess[i].matched === false) {
            return;
        }
    }
    won = true;
    return;
};

const playGame = () => {
    let userName = prompt(
        'Welcome to ISDI CODERS Bingo!👋👋 What is your name?'
    );
    console.table(numberToGuess, ['number']);
    rounds = 0;
    won = false;
    isPlaying = true;

    do {
        if (confirm(`${userName}, do you want a number? 🤓 `)) {
            newTurn();
            checkIfWin();
            console.table(numberToGuess, ['number']);
        } else {
            isPlaying = false;
        }
    } while (!won && isPlaying);

    if (won) {
        alert('LINE!!!!!🎉');
        alert(`¡Congratulations! You won in ${rounds} rounds.`);
    } else {
        alert(`Goodbye ${userName} 😢`);
    }

    if (confirm('Do you want to play again?')) {
        numberToGuess.length = 0;
        usedNumbers.length = 0;
        generateNumberToGuess();
        playGame();
    } else {
        alert(`See you next time ${userName}! 🙋🏻‍♀️`);
        return;
    }
};

generateNumberToGuess();
playGame();
