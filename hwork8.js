// Task 1
// let arr = ['Tom', 'Sam', 'Ray', 'Bob'];
// let [x, y, , z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

// Task 2
// let data = {
//     names: ['Sam', 'Tom', 'Ray', 'Bob'],
//     ages: [20, 24, 22, 26],
// };
// let [, name2, , name4] = data.names;
// let [, age2, , age4] = data.ages;
// console.log(name2);
// console.log(age2);
// console.log(name4);
// console.log(age4);

// Task 3
// function mul(...item) {
//     let result = 1;
//     let hasNumber = false;
//     for (let i of item) {
//         if (typeof i === 'number') {
//             result *= i;
//             hasNumber = true;
//         }
//     } return hasNumber ? result : 0;
// }
// console.log(mul(1, 'str', 2, 3, true));
// console.log(mul(null, 'str', false, true));

// Task 4
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => {
//             return this.data + '';
//         })
//     }
// };

// let client = {
//     server: server,
//     result: '',
//     callback: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     }
// };

// notification: function() {
//     return (callback => {
//         this.result.callback()
//     })
// };
// client.callback(123);
// console.log(client.result);
// console.log(typeof client.result);

// Task 5
// let keys = [1, 2, 3, 4];
// let values = ['div', 'span', 'b', 'i'];

// function mapBuilder(keysArray, valuesArrays) {
//     let map = new Map([
//         [1, 2, 3, 4],
//         ['div', 'span', 'b', 'i']
//     ])
//     return map;
// };
// let map = mapBuilder(keys, values);
// console.log(map.size);
// console.log(map.get(2))