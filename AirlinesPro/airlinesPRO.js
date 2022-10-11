let flights = [
    { id: 00, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 01, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 02, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 03, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 04, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 05, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 06, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 07, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 08, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 09, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

const userName = () => {
    let passenger = prompt("What's your name? ");
    if (passenger === null || passenger === '') {
        alert('Wrong value entered, please try again.');
        return userName();
    } else {
        console.log('Welcome to airline ' + passenger);
    }
};

const flightsInformation = () => {
    flights.forEach(function (fly) {
        if (fly.scale === true) {
            console.log(
                'ID: ' +
                    fly.id +
                    '. The flight from: ' +
                    fly.from +
                    ' and destiny: ' +
                    fly.to +
                    ', has a cost of: ' +
                    fly.cost +
                    '€' +
                    ' with scales'
            );
        } else {
            console.log(
                'ID: ' +
                    fly.id +
                    '. The flight from: ' +
                    fly.from +
                    ' and destiny: ' +
                    fly.to +
                    ', has a cost of: ' +
                    fly.cost +
                    '€' +
                    ' without scales'
            );
        }
    });
};

const avgCost = () => {
    let total = 0;
    flights.forEach(function (fly) {
        total += fly.cost;
    });
    console.log(
        'The average cost of flights is: ' + total / flights.length + '€'
    );
};

const scale = () => {
    let totalScale = 0;
    flights.forEach(function (fly) {
        totalScale += fly.scale;
    });
    console.log('The are ' + totalScale + ' connecting flights');
};

const showLastsFly = () => {
    let finalsFlights = [];
    for (let i = 5; i < flights.length; i++) {
        finalsFlights.push(flights[i]);
    }
    let lastFlights = [];
    finalsFlights.forEach(function (fly) {
        lastFlights.push(fly.to);
    });
    console.log('The last flights have destination: ' + lastFlights.join(', '));
};

const askForRole = () => {
    const role = prompt("What's your role (user/admin)?");
    if (role === null) {
        askForRole();
    } else if (
        role.toLowerCase() !== 'user' &&
        role.toLowerCase() !== 'admin'
    ) {
        askForRole();
    } else {
        return role.toLowerCase();
    }
};

const askForAdminAction = () => {
    const action = prompt(
        'What do you want to do? Create a contact or delete a contact? (create/delete)'
    );
    if (action === null) {
        askForAdminAction();
    } else if (
        action.toLowerCase() !== 'create' &&
        action.toLowerCase() !== 'delete'
    ) {
        alert('Please insert a valid action');
        askForAdminAction();
    } else {
        return action.toLowerCase();
    }
};

const adminAction = () => {
    const action = askForAdminAction();
    if (action === 'create') {
        const newFlight = {};
        newFlight.to = prompt('to:');
        newFlight.from = prompt('from:');
        newFlight.cost = prompt('cost:');
        newFlight.scale = confirm('Does the flight have a stopover?');

        if (newFlight.scale === true) {
            newFlight.scale = true;
        } else if (newFlight.scale === false) {
            newFlight.scale = false;
        } else {
            console.log('Error. Try again.');
        }

        if (flights.length >= 15) {
            alert('You cannot create more flights. The maximum is 15.');
        } else {
            newFlight.id = flights.length;
            scale();
            flights.push(newFlight);
            flightsInformation();
        }
    }
    if (action === 'delete') {
        flightsInformation();
        const idToDelete = +prompt('Insert ID to delete');
        flights = flights.filter((flight) => flight.id !== idToDelete);
        console.log('Here you hace the updated flights');
        flightsInformation();
    }
};

const priceSearchFly = () => {
    let precio = parseFloat(
        prompt(
            'You can search for flights by price: \n 1. Higher than  \n 2. Equal to  \n 3. Lower than'
        )
    );

    switch (precio) {
        case 1:
            let mayor = parseInt(
                prompt('Search for more expensive flights from:')
            );
            console.log('Flights priced ABOVE ' + mayor + '€');
            for (let i = 0; i < flights.length; i++) {
                if (mayor < flights[i].cost) {
                    console.log(
                        'ID: ' +
                            flights[i].id +
                            '. The flight from: ' +
                            flights[i].from +
                            ' and destiny: ' +
                            flights[i].to +
                            ' , has a cost of: ' +
                            flights[i].cost +
                            '€.'
                    );
                }
            }
            break;

        case 2:
            let igual = parseInt(
                prompt('Search for equally expensive flights from:')
            );
            console.log('Flights priced EQUAL to ' + igual + '€');
            for (let i = 0; i < flights.length; i++) {
                if (igual === flights[i].cost) {
                    console.log(
                        'ID: ' +
                            flights[i].id +
                            '. The flight from: ' +
                            flights[i].from +
                            ' and destiny: ' +
                            flights[i].to +
                            ' , has a cost of: ' +
                            flights[i].cost +
                            '€.'
                    );
                }
            }
            break;

        case 3:
            let inferior = parseInt(
                prompt('Search for less expensive flights from:')
            );
            console.log('Flights priced BELOW ' + inferior + '€');
            for (let i = 0; i < flights.length; i++) {
                if (inferior > flights[i].cost) {
                    console.log(
                        'ID: ' +
                            flights[i].id +
                            '. The flight from: ' +
                            flights[i].from +
                            ' and destiny: ' +
                            flights[i].to +
                            ' , has a cost of: ' +
                            flights[i].cost +
                            '€.'
                    );
                }
            }
            break;
    }
};

const fligthsExcerciseSimple = () => {
    userName();
    flightsInformation();
    avgCost();
    scale();
    showLastsFly();
};

fligthsExcerciseSimple();

const fligthsExcercisePRO = () => {
    const role = askForRole();
    if (role === 'user') {
        priceSearchFly();
    }
    if (role === 'admin') {
        adminAction();
    }
};

fligthsExcercisePRO();
