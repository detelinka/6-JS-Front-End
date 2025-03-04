//You will receive an array of names. Sort them alphabetically in ascending order 
//Print a numbered list of all the names, each on a new line.
//The sort function rearranges the array in ascending order

function list(arr){
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}.${arr[i]}`);
  }
}

list(["John", "Bob", "Christina", "Ema"]); // 1. Bob 2. Christina 3. Ema 4. John