function multiplicationTable(num) {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `${num} X ${i} = ${num * i}\n`;
  }
  return table;
}

console.log(multiplicationTable(5));
// Output:
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50