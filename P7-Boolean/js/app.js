//Output:You are a child: False
//Output:You are a teenager: False
//Output:You are an adult: True

//Start with a variable




const birthYear = 2000;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;

let isChild = ageOfPerson <= 10;
let isTeenager = (ageOfPerson >= 11 && ageOfPerson <= 17);
let isAdult = ageOfPerson >= 18;

console.log(isChild)
console.log(isTeenager)
console.log(isAdult)
