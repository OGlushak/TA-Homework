// // Task1
// let mentor = {
//     course: 'JS fundamental',
//     duration: 3,
//     direction: 'web development'
// };
// function propsCount(currentObject) {
//     return Object.keys(currentObject).length
// }
// let result = propsCount(mentor);
// console.log(result);

// Task2
// const person = {
//     firstName: 'Lisa',
//     lastName: 'Doe',
//     age: 22,
//     eyecolor: 'blue',
//     email: 'free@gmail.com'
// };
// function showProps(currentObject) {
//     return Object.keys(currentObject).length
// }
// let propertyNames = Object.keys(person);
// let propertyValues = Object.values(person);
// console.log(propertyNames, propertyValues);

// Task3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//         console.log(this.name + ' ' + this.surname);
//     }

// }
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(middleName) {
//         console.log(this.name + ' ' + middleName + ' ' + this.surname);
//     }
//     showCourse() {
//         const currentYear = new Date().getFullYear();
//         const course = currentYear - this.year + 1;
//         if (course < 1 || course > 6) {
//             console.log(`No course like that`);
//         } else {
//             console.log(`Current course: ` + course);
//         }
//     }
// }
// const stud1 = new Student(`Petrenko`, `Petro`, 2015);
// stud1.showFullName(`Petrovych`);
// stud1.showCourse()

// Task4

/*
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    _experience = 1.2;

    showSalary(salary) {
        let salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`)
    }
    showSalaryWithExperience() {
        let salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary with experience is ${salary}`);
    }
    get showExp() {
        return this._experience;
    }
    set setExp(value) {
        this._experience = 1.5;
    }
    static sortWorkersBySalary(workers) {
        const sortedWorkers = workers.sort((a, b) => {
            let aSalary = a.dayRate * a.workingDays * a._experience;
            let bSalary = b.dayRate * b.workingDays * b._experience;
            return aSalary - bSalary;
        });
        sortedWorkers.forEach(worker => {
            const salary = worker.dayRate * worker.workingDays * worker._experience;
            console.log(`${worker.fullName}: ${salary}`);
        });
    }
}
let John = new Worker(`John Johnson`, 20, 23);
let Tom = new Worker(`Tom Thomson`, 48, 22);
let Andy = new Worker(`Andy Ander`, 29, 23);

console.log(John.fullName);
John.showSalary();
console.log(`Current experience: ` + John.showExp);
John.showSalaryWithExperience();
John.setExp = 1.5;
console.log(`New experience: ` + John.showExp);
John.showSalaryWithExperience();

*/