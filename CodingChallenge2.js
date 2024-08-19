let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

let BMIMark1 = massMark1 / (heightMark1 ** 2);
let BMIJohn1 = massJohn1 / (heightJohn1 ** 2);

if (BMIMark1 > BMIJohn1) {
    console.log(`BMI của Mark (${BMIMark1.toFixed(1)}) cao hơn của John (${BMIJohn1.toFixed(1)})!`);
} else if (BMIJohn1 > BMIMark1) {
    console.log(`BMI của John (${BMIJohn1.toFixed(1)}) cao hơn của Mark (${BMIMark1.toFixed(1)})!`);
} else {
    console.log(`BMI của Mark (${BMIMark1.toFixed(1)}) bằng với của John (${BMIJohn1.toFixed(1)})!`);
}

let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark2 = massMark2 / (heightMark2 ** 2);
let BMIJohn2 = massJohn2 / (heightJohn2 ** 2);

if (BMIMark2 > BMIJohn2) {
    console.log(`BMI của Mark (${BMIMark2.toFixed(4)}) cao hơn của John (${BMIJohn2.toFixed(1)})!`);
} else if (BMIJohn2 > BMIMark2) {
    console.log(`BMI của John (${BMIJohn2.toFixed(4)}) cao hơn của Mark (${BMIMark2.toFixed(1)})!`);
} else {
    console.log(`BMI của Mark (${BMIMark2.toFixed(4)}) bằng với của John (${BMIJohn2.toFixed(1)})!`);
}
