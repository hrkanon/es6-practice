class Student{
    constructor(studentId, studentName, studentAge){
        this.id = studentId;
        this.name = studentName;
        this.age = studentAge;
        // shared property
        this.school = "Civil Aviation School";
    }
}

const student1 = new Student( 1201, "Shuvo", 18);
const student2 = new Student(1208, "Mahiya", 19);
const student3 = new Student(1234, "Popy", 17);
const student4 = new Student(1211, "Bappy", 16);

// console.log(student1, student2);
// console.log(student1.name, student3.name);
console.log(student3);