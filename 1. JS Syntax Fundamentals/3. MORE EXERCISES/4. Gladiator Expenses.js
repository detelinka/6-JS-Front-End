function expences (lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let total = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            total += helmetPrice;
        }
        if (i % 3 === 0) {
            total += swordPrice;
        }
        if (i % 6 === 0) {
            total += shieldPrice;
        }
        if (i % 12 === 0) {
            total += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}