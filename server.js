const db = require("./db/connection");
const express = require("express");
const inquirer = require("inquirer");
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

ask.displayPic();
ask
  .promptMenu()
  .then(ask.promptQuit)
  .then((data) => {
    console.log(data);
    if (!data.quit) {
      ask.promptMenu();
    }
  });

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
