// oddOrEvenSum(1000435); // Odd sum = 9, Even sum = 4

function oddOrEvenSum(input) {
    let num = input.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
        let currentNum = Number(num[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
