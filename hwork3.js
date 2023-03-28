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
