// 2-get_students_by_loc.js
const getStudentsByLocation = (students, city) => {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city);
};

export default getStudentsByLocation;
