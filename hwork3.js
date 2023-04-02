<<<<<<< HEAD
// Task1
const arr = [2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

let arr1 = 3;
while (arr1 <= 5) {
    console.log(`You get ${arr1} number`);
    arr1++;
}
//Task2

for (num = 0; num <= 15; num++) {
    if (num % 2 == 0) {
        console.log(num + ' is even')
    } else (num != 0)
    console.log(num + ' is odd');
};

//Task3
function randArray(k) {
    const array = [];
    for (num = 0; num < k; num++) {
        array[num] = Math.floor(Math.random() * 500);

        console.log(array);
    }
};

randArray(5);

//Task4
function raiseToDegree(a, b) {
    let result = a ** b;
    console.log(result);
}
raiseToDegree(3, 4);

//Task5
function findMin() {
    console.log(arguments);
    let number = Math.min(12, 14, 4, -4, 0.2);
    console.log(number);
}
findMin()

Task6
function findUnic(arr) {
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] === arr[b]) {
                return false;
            } if (arr[a] !== arr[b]) {
                return true;
            }
        }
    }
}
console.log(findUnic([1, 2, 3, 5, 11]));

Task7
function lastElement(arr, count) {
    if (count === null) {
        console.log(arr.pop());
    }
    else {
        console.log(arr.slice(-count));
    }
}
console.log(lastElement([3, 4, 10, -5]));
console.log(lastElement([3, 4, 10, -5], 2));
console.log(lastElement([3, 4, 10, -5], 8));

Task8
function upperCase(sentence) {
    const words = sentence.split(" ")

    const newArray = []
    for (const word of words) {
        let firstLetter = word.substring(0, 1) // getting first letter of each word
        firstLetter = firstLetter.toUpperCase()
        let restLetters = word.substring(1)
        newArray.push(firstLetter + restLetters)
    }
    return newArray.join(" ")
}
console.log(upperCase(`i love java script`))
=======
// Task1
const arr = [2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

let arr1 = 3;
while (arr1 <= 5) {
    console.log(`You get ${arr1} number`);
    arr1++;
}
//Task2

for (num = 0; num <= 15; num++) {
    if (num % 2 == 0) {
        console.log(num + ' is even')
    } else (num != 0)
    console.log(num + ' is odd');
};

//Task3
function randArray(k) {
    const array = [];
    for (num = 0; num < k; num++) {
        array[num] = Math.floor(Math.random() * 500);

        console.log(array);
    }
};

randArray(5);

//Task4
>>>>>>> 18508d8ab87a32b4c59a44302d8317f066528785
