var questions = [
    {
        letter: 'a',
        answer: 'abducir',
        status: 0,
        question:
            'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
    },
    {
        letter: 'b',
        answer: 'bingo',
        status: 0,
        question:
            "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
        letter: 'c',
        answer: 'churumbel',
        status: 0,
        question: 'CON LA C. Niño, crío, bebé',
    },
    {
        letter: 'd',
        answer: 'diarrea',
        status: 0,
        question:
            'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
    },
    {
        letter: 'e',
        answer: 'ectoplasma',
        status: 0,
        question:
            'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
    },
    {
        letter: 'f',
        answer: 'facil',
        status: 0,
        question:
            'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
    },
    {
        letter: 'g',
        answer: 'galaxia',
        status: 0,
        question:
            'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
    },
    {
        letter: 'h',
        answer: 'harakiri',
        status: 0,
        question: 'CON LA H. Suicidio ritual japonés por desentrañamiento',
    },
    {
        letter: 'i',
        answer: 'iglesia',
        status: 0,
        question: 'CON LA I. Templo cristiano',
    },
    {
        letter: 'j',
        answer: 'jabali',
        status: 0,
        question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
        letter: 'k',
        answer: 'kamikaze',
        status: 0,
        question:
            'CON LA K. Persona que se juega la vida realizando una acción temeraria',
    },
    {
        letter: 'l',
        answer: 'licantropo',
        status: 0,
        question: 'CON LA L. Hombre lobo',
    },
    {
        letter: 'm',
        answer: 'misantropo',
        status: 0,
        question:
            'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
    },
    {
        letter: 'n',
        answer: 'necedad',
        status: 0,
        question: 'CON LA N. Demostración de poca inteligencia',
    },
    {
        letter: 'ñ',
        answer: 'señal',
        status: 0,
        question:
            'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.',
    },
    {
        letter: 'o',
        answer: 'orco',
        status: 0,
        question:
            'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
    },
    {
        letter: 'p',
        answer: 'protoss',
        status: 0,
        question:
            'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
    },
    {
        letter: 'q',
        answer: 'queso',
        status: 0,
        question:
            'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
    },
    { letter: 'r', answer: 'raton', status: 0, question: 'CON LA R. Roedor' },
    {
        letter: 's',
        answer: 'stackoverflow',
        status: 0,
        question:
            'CON LA S. Comunidad salvadora de todo desarrollador informático',
    },
    {
        letter: 't',
        answer: 'terminator',
        status: 0,
        question:
            'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
    },
    {
        letter: 'u',
        answer: 'unamuno',
        status: 0,
        question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
        letter: 'v',
        answer: 'vikingos',
        status: 0,
        question:
            'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
    },
    {
        letter: 'w',
        answer: 'sandwich',
        status: 0,
        question:
            'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
    },
    {
        letter: 'x',
        answer: 'botox',
        status: 0,
        question:
            'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
    },
    {
        letter: 'y',
        answer: 'peyote',
        status: 0,
        question:
            'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
    },
    {
        letter: 'z',
        answer: 'zen',
        status: 0,
        question:
            'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
    },
];
let rights = 0;
let failures = 0;
let isPlaying = true;

let rank = [
    { Name: 'David', Puntuation: 20 },
    { Name: 'Mariona', Puntuation: 26 },
    { Name: 'Arturo', Puntuation: 13 },
];

const newTurn = () => confirm('Continue?');
const newRound = () => confirm('Hey, do you want to play another round?');

const getWord = (userName) => {
    const newWord = prompt(`${userName} Your answer is? `);
    if (!newWord) {
        alert('Try again or indicate pasapalabra');
        return getWord(userName);
    }
    return newWord.toLowerCase();
};
const checkWord = (userWords, questions) => {
    if (userWords === 'pasapalabra') {
        alert('PASAPALABRA❗️');
        console.log("You've pased the word!");
        questions.status = 2;
        return;
    }
    if (!userWords.includes(questions.answer)) {
        alert('Incorrect word ❌');
        alert(
            "Oh no, you've failed. The correct answer was " +
                questions.answer +
                '.'
        );
        console.log("Incorrect! You've -1 point.");
        failures++;
        console.log('Current score:');
        console.log(
            '✅ Rights: ' + rights + '. ❌ Failures: ' + failures + '.'
        );
        questions.status = 1;
        return;
    }
    if (!userWords.includes(questions.letter)) {
        alert(
            "This word doesn't contain the required letter: " + questions.letter
        );
        questions.status = 1;
        return;
    }
    if (userWords.includes(questions.answer)) {
        alert('Right word ✅');
        questions.status = 1;
        rights++;
        console.log('Correct! You have 1 point.');
        console.log('Current score:');
        console.log(
            '✅ Rights: ' + rights + '. ❌ Failures: ' + failures + '.'
        );
        return;
    }
};

function ranking() {
    console.log('Your final score was:');
    console.log('✅ Rights: ' + rights + '. ❌ Failures: ' + failures + '.');
    let rankOrdenado = rank.sort((a, b) => b.Puntuation - a.Puntuation);
    console.log('RANKING:');
    console.table(rankOrdenado);
}

const wordToGuess = (questions, playerName) => {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].status !== 0) {
        }
        alert(questions[i].question);
        console.log(questions[i].question);
        const word = getWord(playerName);
        checkWord(word, questions[i], playerName);

        if (!newTurn()) {
            console.log('Final score:');
            console.log(
                '✅ Rights: ' + rights + '. ❌ Failures: ' + failures + '.'
            );
            console.log('You do not enter the ranking for leaving the game.');
            ranking();
            alert('Goodbye 👋');
            isPlaying = false;
            return;
        }
    }
};

const game = () => {
    isPlaying = true;
    won = false;
    let playerName = prompt(
        "Welcome to pasalabra of ISDI CODERS 🙋🏻‍♀️! What's your name?"
    );

    if (!playerName) {
        alert('Please enter your name');
        return playerName;
    } else alert('LETS GO ' + playerName + '!!🚀');
    do {
        wordToGuess(questions, playerName);
        if (questions.every((elem) => elem.status !== 0)) {
            let user = { Name: playerName, Puntuation: rights };
            rank.push(user);
            ranking();
            alert('You hace finished the game!!🎉🎉');
        }
        if (!confirm('Do you want to play again?')) {
            alert('See you next time 👋!');
            isPlaying = false;
            return;
        } else {
            rights = 0;
            failures = 0;
            isPlaying = true;
            game();
        }
    } while (!won && !isPlaying);
};

game();
