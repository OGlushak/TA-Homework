// Task 1
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/update-button' && req.method === 'GET') {
//         res.setHeader('Content-Type', 'application/json');
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.writeHead(200);
//         res.end(JSON.stringify({ message: 'Your vote is accepted' }));
//     } else {
//         res.writeHead(404);
//         res.end('Not found');
//     }
// });

// server.listen(5000, () => {
//     console.log('Server running at http://localhost:5000/');
});

async function getDate() {
    const response = await fetch("date.json");
    const date = await response.json();
    console.log(date);
}

getDate();