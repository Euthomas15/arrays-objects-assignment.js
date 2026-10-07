const students = [
    {
        id: 1,
        name: "David",
        age: 20,
        grades: [85, 90, 78]
    },

    {
        id: 2,
        name: "Sarah",
        age: 21,
        grades: [72, 88, 91]
    },

    { 
        id: 3,
        name : "Michael",
        age: 19,
        grades: [95, 90, 87]

    },

    {
        id: 4,
        name: "Grace",
        age: 22,
        grades: [58, 65, 54]
    },

    {
        id: 5,
        name: "Daniel",
        age: 20,
        grades: [45, 52, 49]
    }
];
console.log(students);




// Question 2: Calculate the average of a student's grades
function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;

    return Number(average.toFixed(2));

}
console.log(calculateAverage([85, 92, 78]));


//This takes the students array and maps it to a new array where each student object now includes an average property that contains the calculated average of their grades. The calculateAverage function is used to compute the average for each student's grades.
const studentsWithAverage = students.map(student=>{
    return {
        ...student,
        average: calculateAverage(student.grades)
    };
});
console.log("Students with averages:", studentsWithAverage);




// QUESTION 3: Filter Passing Students
function getPassingStudents(students) {
    return students.filter(student => student.average >= 60);
}

const passing = getPassingStudents(studentsWithAverage);
console.log("Passing students:", passing);



// // QUESTION 4: Functions & Callbacks
function processStudents(students, callback) {
    return students.map(callback);
}

function addLetterGrade(student) {
    let letterGrade;

    if (student.average >= 90) {
        letterGrade = "A";
    } else if (student.average >= 80) {
        letterGrade = "B";
    } else if (student.average >= 70) {
        letterGrade = "C";
    } else if (student.average >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    return { ...student, letterGrade };
}

function addStatus(student) {
    return {
        ...student,
        status: student.average >= 60 ? "Pass" : "Fail"
    };
}

const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);
console.log("Students with letter grades:", studentsWithGrades);

const studentsWithStatus = processStudents(studentsWithAverage, addStatus);
console.log(studentsWithStatus);