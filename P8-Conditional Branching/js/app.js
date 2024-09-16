//const birthYear = 1994;
//const currentYear = 2024;
//const favoriteNumber = 25;
//let ageOfPerson = currentYear - birthYear;
//console.log(ageOfPerson);

//let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
//if (isChild) {
  //console.log("You are a child");
//}

//let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
//if (isTeenager) {
  //console.log("You are a teenager");
//}

//let isAdult = ageOfPerson >= 18;
//if (isAdult) {
  //console.log("You are an adult");
//}

//if (favoriteNumber > ageOfPerson) {
  //console.log("Favorite Number is Greater");
//}

//else if (favoriteNumber === ageOfPerson) {
  //console.log("They are the same");
//}
//else {
  //console.log("Age is Greater");
//}

//if(favoriteNumber % 2 ===0)  {
//console.log("Favorite Number is Even");
//}

//else {
//console.log("Favorite Number is Odd");
//}






const birthYear = 1994;
const currentYear = 2024;
const favoriteNumber = 25;
let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
console.log(isChild ? "You are a child" : "");

let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);
console.log(isTeenager ? "You are a teenager" : "");

let isAdult = ageOfPerson >= 18;
console.log(isAdult ? "You are an adult" : "");

console.log(favoriteNumber > ageOfPerson ? "Favorite Number is Greater" :
  favoriteNumber === ageOfPerson ? "They are the same" : "Age is Greater");

console.log(favoriteNumber % 2 === 0 ? "Favorite Number is Even" : "Favorite Number is Odd");








