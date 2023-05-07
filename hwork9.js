// Task 1
// function getPromise(message, delay) {
//     // message('test promise');
//     // delay(2000);
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(message);
//         }, delay);
//     });
// };
// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });

// Task 2

// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//         const isNumeric = (n) => isNaN(parseFloat(n)) && isFinite(n);
//         const numericArr = arr.filter(isNumeric);
//         if (numericArr.length !== arr.length) {
//             reject("Error! Incorrect array!");
//         } else {
//             let result = numericArr.reduce((acc, curr) => acc * curr, 1);
//             resolve(result);
//         }
//     })
// };

// calcArrProduct([3, 4, 5]).then(result => console.log(result));
// calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
