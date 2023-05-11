// // Task 1
// function upperCase(str) {
//     const firstChar = str.charAt(0);
//     if (firstChar === firstChar.toUpperCase()) {
//         console.log(`String '${str}' starts with uppercase character`);
//     } else {
//         console.log(`String '${str}' does not start with uppercase character`);
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');

// // Task 2
// function checkEmail(str) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailRegex.test(str)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(checkEmail('Qmail2@gmail.com'));
// console.log(checkEmail('Qmail2gmail.c'));// false
// console.log(checkEmail('notgmail.com')); // false

// // Task 3
// /[dD] [bB] + [dD]?/g;

// let str = 'cdbBdbsbz';
// let regex = /[dD] [bB] + [dD]?/g;
// const matches = str.match(regex);

// console.log(matches);

// Task 5
// let number = 9999 - 9999 - 9999 - 9999;
// function validateCardNumber(cardNumber) {
//     cardNumber = cardNumber.replace(/[-\s]/g, '');

//     if (!/^\d{16}$/.test(cardNumber)) {
//         return false;
//     }

//     let sum = 0;
//     let shouldDouble = false;
//     for (let i = cardNumber.length - 1; i >= 0; i--) {
//         let digit = Number(cardNumber.charAt(i));
//         if (shouldDouble) {
//             digit *= 2;
//             if (digit > 9) {
//                 digit -= 9;
//             }
//         }
//         sum += digit;
//         shouldDouble = !shouldDouble;
//     }
//     return (sum % 10) === 0;
// };

// console.log(validateCardNumber(number));

// Task 6
// function isValidEmail(email) {
//     const regex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
//     return regex.test(email);
// };

// console.log(isValidEmail('my_mail@gmail.com'));
// console.log(isValidEmail('#my_mail@gmail.com'));
// console.log(isValidEmail('my_ma--il@gmail.com'));