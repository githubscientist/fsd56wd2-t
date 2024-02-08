// Courses: CS, IT, ECE
// Student -> class definition
class Student {
    constructor(name, email, course) {
        this.name = name;
        this.email = email;
        this.course = course;
    }

    // getStudentsByCourse(students, course) {
    //     let filteredStudents = [];

    //     students.forEach(student => {
    //         if (student.course === course) {
    //             filteredStudents.push(student);
    //         }
    //     });

    //     return filteredStudents;
    // }

    static getStudentsByCourse(students, course) {
        return students.filter(student => student.course === course);
    }
}

// create an array of Students
const students = [];

// add multiple student objects into the students array
students.push(
    new Student('sathish', 'sathish@gmail.com', 'CS'),
    new Student('krish', 'krish@gmail.com', 'CS'),
    new Student('prakash', 'prakash@gmail.com', 'IT'),
    new Student('suresh', 'suresh@gmail.com', 'ECE'),
    new Student('ramesh', 'ramesh@gmail.com', 'ECE'),
    new Student('john', 'john@gmail.com', 'CS')
);

console.log(Student.getStudentsByCourse(students, 'CS'));