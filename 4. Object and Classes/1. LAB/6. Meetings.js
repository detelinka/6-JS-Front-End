function meetings(data) {
    let schedule = {};

    for (item of data) {
        let [day, name] = item.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);

        }
    }
 
    for (let day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}