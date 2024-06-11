const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const customHelpers = require("./views/helpers/ch")


// app.engine(file_extension, engine_use(directory))
app.engine(
    ".hbs",
    exphbs.engine({
      extname: ".hbs",
      defaultLayout: "main",
      layoutsDir: __dirname + "/views/layout/",
      partialsDir: __dirname + "/views/partials/",
      helpers: customHelpers
    })
  );
  

app.set("view engine", ".hbs");

app.get("/", (req, res) => {
    // find the home.hbs file, and fill in the information
    res.render("home", {
      title: "Home Page",
      message: "Welcome to Handlebars with Express!",
    });
  });
  

  app.get("/custom-helper-example", (req, res) => {
    const sampleDataCH = {
      name: 'John Doe',
      birthday: '1990-01-01',
      message: 'Hello, Custom Helpers!'
    };
    res.render("chExample", sampleDataCH);
  });
  

// if
app.get("/if", (req, res) => {
    res.render("if", { user: sampleData.user });
  });

// unless
app.get("/unless", (req, res) => {
res.render("unless", { condition: sampleData.condition });
});

// each
app.get("/each", (req, res) => {
res.render("each", { users: sampleData.users });
});

// Sample data
const sampleData = {
    user: { name: "John Doe", email: "john@example.com" },
    users: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
    ],
    condition: false,
  };
  

const PORT = 8300;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


