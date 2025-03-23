function flightSchedule(arr){
    let flights = arr[0];
    let changedStatus = arr[1];
    let status = arr[2][0];
    let flight = {};

    for (let i = 0; i < flights.length; i++) {
        let [flightNumber, destination] = flights[i].split(' ');
        flight[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    }

    for (let i = 0; i < changedStatus.length; i++) {
        let [flightNumber, newStatus] = changedStatus[i].split(' ');
        if (flight.hasOwnProperty(flightNumber)) {
            flight[flightNumber].Status = newStatus;
        }
    }

    for (let key in flight) {
        if (flight[key].Status === status) {
            console.log(flight[key]);
        }
    }
}