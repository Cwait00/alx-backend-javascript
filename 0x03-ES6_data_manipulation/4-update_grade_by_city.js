// 4-update_grade_by_city.js
function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  const updatedStudents = studentsInCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';
    return { ...student, grade };
  });
  return updatedStudents;
}

export default updateStudentGradeByCity;
