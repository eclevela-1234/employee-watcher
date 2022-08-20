// opening screen
var http = require('http');
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
`);
};

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

const handleQuery = (data) => {
  if (data.query === "View all departments") {
    http.get('http://localhost:3001/api/departments', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  // Any 2xx status code signals a successful response but
  // here we're only checking for 200.
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // Consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
  }
};

module.exports = { promptMenu, promptQuit, displayPic, handleQuery };
