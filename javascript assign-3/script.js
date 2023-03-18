// +++++++++ QUESTION - 1 ++++++//

// function countString(str, letter) {
//     const re = new RegExp(letter, 'g');
//     const count = str.match(re).length;
//     return count;
// }
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');
// const result = countString(string, letterToCheck);
// console.log(result);

// ++++++++QUESTION - 2 +++++++//

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// function removeDuplicate(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicate(arr));


// ++++++++QUESTION - 3 +++++++//

// const arr = [1, 3];
// [arr[2]] = [arr[1]];
// console.log(arr);

// ++++++++QUESTION - 4 +++++++//

// const numbers = [1, 2, 3, 4, 5,];
// console.log(numbers.slice(0, -3));

// ++++++++QUESTION - 5 +++++++//

// const array = [1, 5, 8, 2, 7];
// console.log(Math.min(...array));
// console.log(Math.max(...array));

// ++++++++QUESTION - 6 +++++++//

const person = {
    name: "sudhakar",
    age:26,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "sector 62 Noida",
        state: "Uttar Pradesh",
    },
};
const {name: callSign} = person;
console.log(callSign);
const {address: {street}} = person;
console.log(street);