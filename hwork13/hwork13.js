// Task 1
let a = 0.1;
let b = 0.2;

let result = a + b;

if (result === 0.3) {
    console.log('The result is equal to 0.3.');
} else {
    console.log('The result is not equal to 0.3.')
};

// Task 2
let userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

if (userList.includes('admin')) {
    console.log("The array contains element 'admin'.");
} else {
    console.log("The array does not contains element 'admin'.");
};

if (userList[0] === 'Nick') {
    console.log("The first element in the array is 'Nick'.");
} else {
    console.log("The first element in the array is not 'Nick'.");
};

if (userList[userList.length - 1] === 'new_user_2') {
    console.log("The last element in the array is 'new_user_2'. ");
} else {
    console.log("The last element in the array is not 'new_user_2'. ");
};

if (userList.length === 5) {
    console.log("The lenght of the array is 5.");
} else {
    console.log("The lenght of the array is not 5.")
};

if (typeof userList[2] === 'string') {
    console.log("Third element in the array is a string.");
} else {
    console.log("Third element in the array is not a string");
};

if (userList[7] === undefined) {
    console.log("There is no 8th element in the array.");
} else {
    console.log("There is 8th element in the array.");
};