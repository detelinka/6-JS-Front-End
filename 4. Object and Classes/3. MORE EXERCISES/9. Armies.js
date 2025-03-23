function armies(arr) {
    let armies = {};

    for (let line of arr) {
        if (line.includes('arrives')) {
            let leader = line.split(' ')[0];            // Extract leader name directly
            armies[leader] = {};                        // Initialize army data for this leader
        } else if (line.includes(':')) {
            let [leader, army] = line.split(': ');
            let [name, count] = army.split(', ');
            count = +count;                             // Convert army count to a number

            if (armies.hasOwnProperty(leader)) {
                armies[leader][name] = count;           // Add army with count
            }
        } else if (line.includes('+')) {
            let [name, count] = line.split(' + ');
            count = +count;                             // Convert to number
            
            // Update the army count for all leaders that have the army
            for (let leader in armies) {
                if (armies[leader].hasOwnProperty(name)) {
                    armies[leader][name] += count;      // Add the count
                }
            }
        } else if (line.includes('defeated')) {
            let leader = line.split(' ')[0];            // Get the leader's name
            delete armies[leader];                      // Remove the leader and their army
        }
    }

    // Sort leaders by their total army count, then by name
    let sortedLeaders = Object.entries(armies).sort((a, b) => {
        let aTotalCount = Object.values(a[1]).reduce((acc, count) => acc + count, 0);
        let bTotalCount = Object.values(b[1]).reduce((acc, count) => acc + count, 0);

        return bTotalCount - aTotalCount || a[0].localeCompare(b[0]);
    });

    // Print each leader and their armies
    for (let [leader, army] of sortedLeaders) {
        let totalArmyCount = Object.values(army).reduce((acc, count) => acc + count, 0);
        console.log(`${leader}: ${totalArmyCount}`);

        // Sort armies for this leader by their count
        let sortedArmy = Object.entries(army).sort((a, b) => b[1] - a[1]);

        for (let [armyName, count] of sortedArmy) {
            console.log(`>>> ${armyName} - ${count}`);
        }
    }
}
