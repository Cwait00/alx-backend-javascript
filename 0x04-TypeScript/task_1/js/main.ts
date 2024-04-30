interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Define the interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
}

// Example usage
const result: string = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe
