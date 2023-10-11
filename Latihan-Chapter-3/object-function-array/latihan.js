const studentGrades = [];

// @params: studentName, grade
function addStudentGrade(studentName, grade) {
  studentGrades.push({ name: studentName, grade: grade });
  // void;
}

function displayStudentGrades() {
  console.log(studentGrades); // void
}

function calculateAverageGrade() {
  let hasilCalculate = 0;
  for (let i = 0; i < studentGrades.length; i++) {
    hasilCalculate = hasilCalculate + studentGrades[i].grade;
  }
  console.log(hasilCalculate);
  return hasilCalculate / studentGrades.length; // number
}

function findHighestGradeStudent() {
  let topStudent = studentGrades[0];

  for (let i = 1; i < studentGrades.length; i++) {
    if (studentGrades[i].grade > topStudent.grade) {
      topStudent = studentGrades[i];
    }
  }
  return { name: topStudent.name, grade: topStudent.grade }; // object
}

addStudentGrade("Alice", 92);
addStudentGrade("Bob", 78);
addStudentGrade("Charlie", 86);

console.log("All Student Grades:");
displayStudentGrades();

console.log("Average Grade:", calculateAverageGrade());

const topStudent = findHighestGradeStudent();
console.log(
  "Top Student:",
  topStudent
    ? `${topStudent.name} with a grade of ${topStudent.grade}`
    : "No top student found."
);
