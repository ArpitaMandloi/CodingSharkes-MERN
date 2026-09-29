// 6. Given an array of students, add a new property "status" with the value "pass" if marks are 50 or above, otherwise "fail".
// let students = [
//     { name: "Amit", marks: 85 },
//     { name: "Rahul", marks: 45 },
//     { name: "Priya", marks: 72 }
// ];
// Output:
//   [
//       { "name": "Amit", "marks": 85, "status": "pass" },
//       { "name": "Rahul", "marks": 45, "status": "fail" },
//       { "name": "Priya", "marks": 72, "status": "pass" }
//   ]
let students = [
    { name: "Amit", marks: 85 },
    { name: "Rahul", marks: 45 },
    { name: "Priya", marks: 72 }
];

students.forEach((element) => {

    if (element.marks >= 50) {
        element.status = "pass";
    }
    else {
        element.status = "fail";
    }

});

console.log(students);
