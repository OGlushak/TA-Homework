//Task1
let x = 1;
let y = 2;
console.log(1 * 10 + 2);
console.log(typeof 'x, y');

console.log(true + '2');
console.log(1 + '2');

console.log(x = y = true); //boolean(x+y)
console.log(x != y);

console.log(x, y !== NaN) //
console.log(x + y);


//Task2
const favourite = prompt(`What's your favourite number?`);
console.log(favourite);

if (favourite === 7) {
    console.log(`it's a favourite number`)
} else ('m' === 7)
console.log(`It's also possible`)


//Task3

const somedata = [12, 'best', true, null]
console.log(somedata.length);
somedata[5] = prompt(`Please enter your phone`)
console.log(somedata[5]);
console.log(somedata.length);
somedata.shift();
console.log(somedata);


//Task4

let cities = ['Rome', 'lviv', 'Warsaw'];
cities = cities.join(' * ');
console.log(cities);



//Task5

const isAdult = prompt('Did you reach the age of majority?');

if (isAdult >= 18) {
    console.log(`You have reached the age of majority`)
} else (isAdult < 18)
console.log(`You are still too young`)

//Task6 to be continued
let firstSide = Number(prompt(`value1`));
let secondSide = Number(prompt(`value2`));
let thirdSide = Number(prompt(`value3`));



//Task7
let date = new Date();
let currentHour = date.getHours();

if (currentHour >= 23 || currentHour <= 5) {
    console.log(`Good night`)
} else if (currentHour >= 5 || currentHour <= 11) {
    console.log(`Good morning`)
} else if (currentHour >= 11 || currentHour <= 17) {
    console.log(`Good day`)
} else if (currentHour >= 17 || currentHour <= 23) {
    console.log(`Good evening`)
}