function circleArea(r) {
    if (typeof r === 'number') {
        let area = Math.PI * r * r;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof r}.`);
    }
}

circleArea(5); // 78.54
circleArea("name"); // We can not calculate the circle area, because we receive a string.