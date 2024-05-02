class Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any other dynamic attribute

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience !== undefined) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

// Example usage
const teacher3: Teacher = new Teacher('John', 'Doe', false, 'London');
teacher3.contract = false;

console.log(teacher3);
