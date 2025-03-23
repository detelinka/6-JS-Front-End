/*
input:
[
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]	


Output:

Hero: Hes
level => 1
items => Desolator, Sentinel, Antara //as input, NOT sorted
Hero: Derek
level => 12
items => BarrelVest, DestructionSword
Hero: Isacc
level => 25
items => Apple, GravityGun


*/

function inventory(input) {
    let heroes = [];
    for (let line of input) {
        let [name, level, items] = line.split(' / ');  //split by ' / '
        level = Number(level); //parse to number
        items = items.split(', ').join(', '); //split by ', ' and join by ', '     
        
        let hero = { //create object
            name,
            level,
            items
        };
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.level - b.level); //sort by level

    for (let hero of heroes) { //print
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}