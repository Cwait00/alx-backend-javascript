// 1-get_list_student_ids.js
function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  return arrayOfObjects.map((student) => student.id);
}

export default getListStudentIds;
