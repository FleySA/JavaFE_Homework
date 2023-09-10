const numbers = [-10, 22, 13, -34, 52, 64, 17, -42, 56];
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  } else {
    oddSum += numbers[i];
  }
}

let difference = evenSum - oddSum;

if (difference < 0) {
  difference = -difference;
}

console.log("Разница между суммой четных и нечетных чисел:");
console.log(difference);