export default function* createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  for (const deptEmployees of departments) {
    for (const employee of deptEmployees) {
      yield employee;
    }
  }
}
