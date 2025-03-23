function solve(json){
    let obj = JSON.parse(json);
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}