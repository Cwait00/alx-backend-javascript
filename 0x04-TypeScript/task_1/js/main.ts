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

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const teacher3: Teacher = new Teacher('John', 'Doe', false, 'London');
teacher3.contract = false;

console.log(teacher3);

// Example usage of Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Function to print teacher's name
function printTeacher(firstName: string, lastName: string): string {
  return firstName.charAt(0) + '. ' + lastName;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Test printTeacher function
console.log(printTeacher('John', 'Doe')); // Output: J. Doe
