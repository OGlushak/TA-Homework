// // Task1
// const http = require('http');
// let os = require('os');
// let path = require('path');

// http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });

//     response.write("<h1>System Information</h1>");
//     response.write("Current user name: " + os.userInfo().username);
//     resnonse.write("<br>");
//     response.write("OS type: " + os.type());
//     resnonse.write("<br>");
//     response.write("System work time: " + os.loadavg());
//     resnonse.write("<br>");
//     response.write("Current work directory: " + path.dirname(__filename));
//     resnonse.write("<br>");
//     response.write("Server file name: " + path.basename(__filename));

//     response.end();
// }).listen(9090);

// console.log("Current user name: " + os.userInfo());
// console.log("OS type: " + os.type());
// console.log("System work time: " + os.loadavg());
// console.log("Current work directory: ${cwd}");
// console.log("Server file name: ${filename}");
// console.log("The server is listening in localhost:9090")

// // Task 2

// // from Personal module
// const currentDate = new Date();
// module.exports.date = currentDate;

// module.exports.Message = function (name) {
//     const hour = currentDate.getHours();

//     switch (true) {
//         case hour < 11:
//             return 'Good morning, ${name}';
//         case hour >= 11 && hour < 17:
//             return 'Good day, ${name}';
//         case hour > 17 && hour <= 23:
//             return 'Good night, ${name}'
//     }
// }

// // from main module
// const http = require('http');
// const greeting = require('./personalmodule');
// const os = require('os');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     let userName = os.userInfo().username;

//     res.write('Date of request: ${greeting.date}<br>');
//     res.write(greeting.showMessage(userName));

//     res.end();
// }).listen(8000);

// console.log('Server running at http://localhost:8000/');