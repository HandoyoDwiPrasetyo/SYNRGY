const formStudent = document.getElementById("form-student");
const inputSearch = document.getElementById("search");

const studentRecords = [
  {
    name: "Amir",
    age: 20,
    grade: 90,
  },
  {
    name: "Bona",
    age: 22,
    grade: 86,
  },
  {
    name: "Ciko",
    age: 21,
    grade: 54,
  },
];

displayStudents(studentRecords);

inputSearch.addEventListener("change", searchByName);
formStudent.addEventListener("submit", addStudent);

function searchByName(e) {
  const keyword = e.target.value.toLowerCase();
  // gunakan fungsi .filter contoh : studentRecords.filter((student) => {student.age === keyword})
  const filterRecords = studentRecords.filter((student) =>
    student.name.toLowerCase().includes(keyword)
  );
  displayStudents(filterRecords);
}

function addStudent(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const grade = parseFloat(document.getElementById("grade").value);

  // Validate inputs
  if (!name || isNaN(age) || isNaN(grade)) {
    alert("Please enter valid values for Name, Age, and Grade.");
    return;
  }

  const student = {
    name: name,
    age: age,
    grade: grade,
  };

  studentRecords.push(student);

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("grade").value = "";

  displayStudents(studentRecords);
}

function displayStudents(studentRecords) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  for (let i = 0; i < studentRecords.length; i++) {
    let nilaiHuruf = "";

    if (studentRecords[i].grade >= 90) {
      nilaiHuruf = "A";
    } else if (studentRecords[i].grade >= 80) {
      nilaiHuruf = "B";
    } else if (studentRecords[i].grade >= 70) {
      nilaiHuruf = "C";
    } else if (studentRecords[i].grade >= 60) {
      nilaiHuruf = "D";
    } else {
      nilaiHuruf = "E";
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <div class="py-1">
        Student Name: ${studentRecords[i].name}, Age: ${studentRecords[i].age}, Grade: ${nilaiHuruf}
        <button type="button" class=" mx-1 btn btn-danger" onclick="remove(${i})">remove</button>
        <button type="button" class="mx-1 btn btn-secondary" onclick="edit(${i})">edit</button>
        </div>
    `;
    studentList.appendChild(listItem);
  }
}

function remove(index) {
  if (index >= 0 && index < studentRecords.length) {
    studentRecords.splice(index, 1);
    displayStudents(studentRecords);
  }
}

function edit(index) {
  if (index >= 0 && index < studentRecords.length) {
    const student = studentRecords[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("grade").value = student.grade;

    studentRecords.splice(index, 1);
    displayStudents(studentRecords);
  }
}
