const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");
const cTable = require('console.table');
var https = require('https');
// const inputCheck = require('./utils/inputCheck');

const ask = require("./app");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);

// Not Found response for unmatched routes
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

ask.displayPic();

const run = () => {
ask
  .promptMenu()
  .then((data) => ask.handleQuery(data))
  .then(ask.promptQuit)
  .then((data) => {
    if (!data.quit) {
      run();
    } else {process.exit()}
  });
}

run();