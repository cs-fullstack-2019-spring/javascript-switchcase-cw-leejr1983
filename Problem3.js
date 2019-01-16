// Problem 3:
//
// Put the start of your program in a main function.
// Create an attendance array. Ask the user if a teacher, student, or parent is checking in.
// Use a switch statement to add the teacher/student/parent to the attendance array, then log the option they chose.
// Repeat this five times.

main()

function main() {

    var expr = prompt("Is a teacher, student, or parent check in?");

    attendance = [ "teacher", "student", "parent" ]

    switch (expr) {
        case "teacher":
            console.log(attendance[0]);
            break;
        case "student":
            console.log(attendance[1]);
            break;
        case "parent":
            console.log(attendance[2]);
            break;

            
    }








}