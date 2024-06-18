const http = require('http');
const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.split('\n').filter(line => line);
                const students = lines.slice(1);
                console.log(`Number of students: ${students.length}`);
                const fields = {};
                students.forEach(student => {
                    const [firstname, lastname, age, field] = student.split(',');
                    if (!fields[field]) fields[field] = [];
                    fields[field].push(firstname);
                });
                for (const field in fields) {
                    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
                }
                resolve({students, fields});
            }
        });
    });
}

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        countStudents(process.argv[2])
            .then(({ students, fields }) => {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('This is the list of our students\n');
                res.write(`Number of students: ${students.length}\n`);
                for (const field in fields) {
                    res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
                }
                res.end();
            })
            .catch((error) => {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(error.message);
            });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
