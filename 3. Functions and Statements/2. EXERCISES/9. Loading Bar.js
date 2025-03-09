function loadingBar (num) {
    let loadingBar = new Array(10).fill('.');
    let percentage = num / 10;
    let percentageStr = percentage * 10;
    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[${loadingBar.join('')}]`);
    } else {
        console.log(`${percentageStr}% [${loadingBar.fill('%', 0, percentage).fill('.', percentage).join('')}]`);
        console.log('Still loading...');
    }
}