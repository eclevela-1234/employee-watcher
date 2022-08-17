// opening screen
const displayPic = () => {
console.log(`
####### #     # ######  #       ####### #     # ####### #######    #     #    #    #######  #####  #     # ####### ######  
#       ##   ## #     # #       #     #  #   #  #       #          #  #  #   # #      #    #     # #     # #       #     # 
#       # # # # #     # #       #     #   # #   #       #          #  #  #  #   #     #    #       #     # #       #     # 
#####   #  #  # ######  #       #     #    #    #####   #####      #  #  # #     #    #    #       ####### #####   ######  
#       #     # #       #       #     #    #    #       #          #  #  # #######    #    #       #     # #       #   #   
#       #     # #       #       #     #    #    #       #          #  #  # #     #    #    #     # #     # #       #    #  
####### #     # #       ####### #######    #    ####### #######     ## ##  #     #    #     #####  #     # ####### #     # 

WELCOME TO EMPLOYEE WATCHER! (c) 2022 Eliot Cleveland
`);}

const inquirer = require("inquirer");

const promptMenu = () => {
  return inquirer.prompt({
    type: "list",
    name: "query",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  });
};
const promptQuit = () => {
  return inquirer.prompt({
    type: "confirm",
    name: "quit",
    message: "Are you finished? Enter 'y' to exit.",
    default: "false",
  });
};

const begin = () => {
  promptMenu()
    .then(promptQuit)
    .then((data) => {
      if (!data.quit) {
        begin();
      }
    });
};

module.exports = {promptMenu, promptQuit, displayPic}
