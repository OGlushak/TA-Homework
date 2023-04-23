// Task 1

// let myWindow = window.open("https://www.myfirstwindow.com", "myfirstwindow", "height=300, width=300, left=300, top=300");
// console.log(window.innerHeight, window.innerWidth);

// setTimeout(function () {
//     window.resizeTo(500, 500);
// }, 2000);
// // alert(myWindow)
// setTimeout(function () {
//     window.moveBy(200, 200);
// }, 4000);

// setTimeout(function () {
//     myWindow.close();
// }, 6000);

// Task 2

// function changeCSS() {
//     let textElement = document.getElementById("text");

//     textElement.style.color = "orange";
//     textElement.style.fontSize = "20px";
//     textElement.style.fontFamily = "Comic Sans MS";
// }
// changeCSS()

// // Task 3
// let button1 = document.getElementById("button1");
// button1.addEventListener("click", function () {
//     document.body.style.backgroundColor = "blue";
// });

// let button2 = document.getElementById("button2");
// button2.addEventListener('dblclick', function () {
//     document.body.style.backgroundColor = "pink";
// });
// let button3 = document.getElementById("button3");
// button3.addEventListener('mousedown', function () {
//     document.body.style.backgroundColor = 'brown';
//     button3.addEventListener('mouseup', function () {
//         document.body.style.backgroundColor = 'white';
//     })
// });

// let myLink = document.getElementById('myLink');
// myLink.addEventListener('mousemove', function () {
//     document.body.style.backgroundColor = 'yellow';
//     myLink.addEventListener('mouseout', function () {
//         document.body.style.backgroundColor = 'white';
//     })
// });

// Task 4
// function deleteItem() {
//     let dropDown = document.getElementById('drop-down');
//     let selectedItem = dropDown.options[dropDown.selectedIndex];
//     dropDown.removeChild(selectedItem)
// };

// // trying to add element into drop-down using the same approach
// function addItem() {
//     let dropDown = document.getElementById('drop-down');
//     let selectedItem = dropDown.options[dropDown.selectedIndex];
//     dropDown.appendChild('John', 'Alise')
// }

// Task 5

// function displayMessage() {
//     alert(' I am pressed')
// };

// function hoverMessage() {
//     alert('Mouse on me');
// };

// function leaveMessage() {
//     alert('Mouse is not on me')
// };

// Task 6
// let widthElem = document.getElementById('width');
// let heightElem = document.getElementById('height');

// window.addEventListener('resize', function () {
//     widthElem.textContent = window.innerWidth + 'px';
//     heightElem.textContent = window.innerHeight + 'px';
// });