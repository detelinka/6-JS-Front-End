function browserHistory(obj, arr) {
    let browserName = obj['Browser Name'];
    let openTabs = obj['Open Tabs'];
    let recentlyClosed = obj['Recently Closed'];
    let browserLogs = obj['Browser Logs'];

    for (let action of arr) {
        let [command, site] = action.split(' ');
        if (command === 'Open') {
            openTabs.push(site);
            browserLogs.push(action);
        } else if (command === 'Close') {
            if (openTabs.includes(site)) {
                openTabs = openTabs.filter(x => x !== site);
                recentlyClosed.push(site);
                browserLogs.push(action);
            }
        } else if (command === 'Clear') {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        }
    }
    console.log(`${browserName}\nOpen Tabs: ${openTabs.join(', ')}\nRecently Closed: ${recentlyClosed.join(', ')}\nBrowser Logs: ${browserLogs.join(', ')}`);
}