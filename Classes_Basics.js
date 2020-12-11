class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("jay", "anto", 3);

console.log(firstStudent.fullName());