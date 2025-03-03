function totalPrice(count, group, day) {
    if (group === "Students") {
        if (day === "Friday") {
            let price = 8.45;
            let totalPrice = count * price;
            if (count >= 30) {
                totalPrice *= 0.85;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        } else if (day === "Saturday") {
            let price = 9.80;
            let totalPrice = count * price;
            if (count >= 30) {
                totalPrice *= 0.85;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        } else if (day === "Sunday") {
            let price = 10.46;
            let totalPrice = count * price;
            if (count >= 30) {
                totalPrice *= 0.85;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    } else if (group === "Business") {
        if (day === "Friday") {
            let price = 10.90;
            let totalPrice = count * price;
            if (count >= 100) {
                totalPrice -= 10 * price;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        } else if (day === "Saturday") {
            let price = 15.60;
            let totalPrice = count * price;
            if (count >= 100) {
                totalPrice -= 10 * price;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        } else if (day === "Sunday") {
            let price = 16;
            let totalPrice = count * price;
            if (count >= 100) {
                totalPrice -= 10 * price;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    } else if (group === "Regular") {
        if (day === "Friday") {
            let price = 15;
            let totalPrice = count * price;
            if (count >= 10 && count <= 20) {
                totalPrice *= 0.95;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        } else if (day === "Saturday") {
            let price = 20;
            let totalPrice = count * price;
            if (count >= 10 && count <= 20) {
                totalPrice *= 0.95;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        } else if (day === "Sunday") {
            let price = 22.50;
            let totalPrice = count * price;
            if (count >= 10 && count <= 20) {
                totalPrice *= 0.95;
            }
            console.log(`Total price: ${totalPrice.toFixed(2)}`);
        }
    }

}

totalPrice(30, "Students", "Sunday");  // Total price: 266.73
totalPrice(40, "Regular", "Saturday");  // Total price: 800.00

