// else if (data.query === "Add a department") {
//     return inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "param",
//           message: "What is the name of the department (Required)",
//           validate: (nameInput) => {
//             if (nameInput) {
//               return true;
//             } else {
//               console.log("You need to enter a department name!");
//               return false;
//             }
//           },
//         },
//       ])
//       .then((data) => {
//         console.log(data);
//       });

This is a command line based program that utilzes Node, Express, Inquirer & Axios to deliver an employee managment system. The user is able to interact with the database in multiple ways    
such as viewing each table, and adding and updating employee, role and department records. Creating this application solidified my understanding of the back end. There are still a few        
improvements that would make it more user friendly, such as dynamically creating inquirer prompts to update with employee roles, departments, manager roles, etc. We'll call it a work in     
progress!