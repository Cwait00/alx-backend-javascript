// Define interface for the class constructor
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

// Define interface for the class
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the class
class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: John
