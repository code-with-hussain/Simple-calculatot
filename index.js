import inquirer from "inquirer";
// Asking Question form Users through inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number ", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multipication", "Division"],
    },
]);
console.log(answers);
// // considtional statment if else 
if (answers.operator === "Addition") {
    console.log(answers.firstName + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstName - answers.secondNumber);
}
else if (answers.operator === "Multipications") {
    console.log(answers.firstName * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstName / answers.secondNumber);
}
else {
    console.log("Invaild Input");
}
// ===============================================================================
// { messeage:"enter 1st number",type: "number",name : "firstNumber"},
// { messeage:"enter 2nd number",type: "number",name : "secondNumber"},
// {
//  message: "select one operator 4 operation",
//  type: "list",
//  name: "operator",
//  choices:["addition", "substraction","multiplication","division"],
// },
// ]);
// console.log(answers);
// //if conditional statment
// if(answers.operator === "addition")
// {
// console.log(answers.firstNumber + answers.secondNumber)
// }
// else if(answers.operator === "substraction")
//        {
//   console.log(answers.firstNumber - answers.secondNumber)
//               }
// else if(answers.operator === "multiplication")
//  {
//  console.log(answers.firstNumber * answers.secondNumber)
//  }
//  else if(answers.operator === "division")
//  {
//  console.log(answers.firstNumber / answers.secondNumber)
//  }
//  else
//  {
//        console.log("invalid input")
//  }
