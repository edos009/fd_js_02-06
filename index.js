//! Example 1
//? Проверить возраст пользователя на совершенолетие

// const isAdult = function(ageUser){
//   const adulthood = 18;

//   if (ageUser >= adulthood) {
//     return true;
//   }
//   return false;
// }

// const result = isAdult(26);
// console.log(result);

//! Example 2
// /**
//  * Get multiplicity two numbers
//  * @param {number} valueNumber1 number
//  * @param {number} valueNumber2 number
//  * @returns boolean
//  */
// const getMultiplicityNumber = function (valueNumber1, valueNumber2) {
//   return valueNumber1 % valueNumber2 === 0;
// };

// console.log(getMultiplicityNumber(11, 4));

//! Example 3
// const checkNumbers = function (
//   numberValue,
//   numberCheckMore,
//   multiplicityValue
// ) {
//   return numberValue > numberCheckMore && numberValue % multiplicityValue === 0;
// };

// console.log(checkNumbers(49, 20, 7));

//! Example 4
// /**
//  *
//  * @param {number} numSize1 number
//  * @param {number} numSize2 number
//  * @param {number} numSize3 number
//  * @returns boolean
//  */
// const checkTriangular = function (numSide1, numSide2, numSide3) {
//   return (
//     numSide1 + numSide2 > numSide3 &&
//     numSide2 + numSide3 > numSide1 &&
//     numSide1 + numSide3 > numSide2
//   );
// };

// console.log(checkTriangular(2, 2, 3));

//! Example 5

// const getResultNumbers = function(num1, num2){
//   if (num1 % 2 === 0 && num2 % 2 === 0) {
//     return num1 + num2;
//   }
//   if (num1 % 2 === 1 && num2 % 2 === 1) {
//     return num1 * num2;
//   }
//   if (num1 % 2 === 0 && num2 % 2 === 1){
//     return num2;
//   }
//     return num1;
// }

// console.log(getResultNumbers(3,2));
