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