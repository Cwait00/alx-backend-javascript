import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];

    try {
      const students = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';
      for (const [field, studentsList] of Object.entries(students).sort()) {
        responseText += `Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}\n`;
      }
      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databasePath);
      const studentsList = students[major] || [];
      res.status(200).send(`List: ${studentsList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
