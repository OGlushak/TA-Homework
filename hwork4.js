// //Task1
// function calcRectangleArea() {
//     let width = 3;
//     let height = 5;
//     let area = width * height;
//     console.log(`Area of rectangle is ` + area);
// }
// calcRectangleArea()

// //Task2

// let user = 'Josh';
// let age = 12;
// function checkAge() {
//     try {
//         let age = prompt(`Please enter your age`);
//         if (age === " ")
//             throw error(`This field is empty! Please enter your age`);
//         else if (isNaN(parseInt(age)))
//             throw error(`Please enter your age`);
//         else if (age <= 14)
//             throw error(`Access is prohibited due to age restriction.`)
//     } catch (e) {
//         alert(`Access confirmed.`)
//     }
// }
// checkAge()

Task3
function showMonthName() {
    let myDate = new Date('2023-04-05');
    let month = myDate.getMonth() + 1;
    let day = myDate.getDay() + 1;

    console.log(day)
}
showMonthName()

function showMonthName() {
    let months = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    if (months[month] !== undefined) {
        return months[month - 1];
    } else {
        throw Exception(`incorect month number`);
    }
}
console.log(month = 11)
showMonthName()

try {
    myMonth = 11;
    let monthName = showMonthName(myMonth);
    console.log(myMonth, monthName)
} catch (e) {
    throw new error(e.name, e.message)
    // }

//     //Task4
//     function showUser(id) {
//         if (id < 0 || id === NaN) {
//             throw new error(`ID must not be negative` + id);
//         } return { id };
//     }
//     showUser(7, -12, 44, 22)

//     // will continue working here
//     function showUsers(ids) {
//         let result = [];
//     }