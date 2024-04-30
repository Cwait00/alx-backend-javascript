// 3-get_ids_sum.js
const getStudentIdsSum = (students) => {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((total, student) => total + student.id, 0);
};

export default getStudentIdsSum;
