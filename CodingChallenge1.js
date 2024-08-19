
let massMark1 = 78; 
let heightMark1 = 1.69; 
let massJohn1 = 92; 
let heightJohn1 = 1.95; 

let BMIMark1 = massMark1 / (heightMark1 ** 2);
let BMIJohn1 = massJohn1 / (heightJohn1 ** 2);

let markHigherBMI1 = BMIMark1 > BMIJohn1;

console.log("Dữ liệu 1:");
console.log("BMI của Mark:", BMIMark1.toFixed(2));
console.log("BMI của John:", BMIJohn1.toFixed(2));
console.log("Mark có BMI cao hơn John:", markHigherBMI1);

let massMark2 = 95; 
let heightMark2 = 1.88; 
let massJohn2 = 85; 
let heightJohn2 = 1.76; 

let BMIMark2 = massMark2 / (heightMark2 ** 2);
let BMIJohn2 = massJohn2 / (heightJohn2 ** 2);

let markHigherBMI2 = BMIMark2 > BMIJohn2;

console.log("Dữ liệu 2:");
console.log("BMI của Mark:", BMIMark2.toFixed(2));
console.log("BMI của John:", BMIJohn2.toFixed(2));
console.log("Mark có BMI cao hơn John:", markHigherBMI2);
