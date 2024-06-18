const express = require('express');
const fs = require('fs');
const app = express();

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
            } else {
                const lines = data.split('\n').filter(line => line);
                const students = lines.slice(1);
                const fields = {};
                students.forEach(student => {
                    const [firstname, lastname, age, field] = student.split(',');
                    if (!fields[field]) fields[field] = [];
                    fields[field].push(firstname);
                });
                resolve({students, fields});
            }
        });
    });
}

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    countStudents(process.argv[2])
        .then(({ students, fields }) => {
            let responseText = 'This is the list of our students\n';
            responseText += `Number of students: ${students.length}\n`;
            for (const field in fields) {
                responseText += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            }
            res.send(responseText);
        })
        .catch((error) => {
            res.status(500).send(error.message);
        });
});

app.listen(1245);

module.exports = app;
