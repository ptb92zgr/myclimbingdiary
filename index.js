const express = require("express");
const port = 3000;
const path = require("path");
const app = express();

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));
//logging in / registration

app.get("/", (req, res) => {
  res.render("home");
});

//my profile - my ascents, settings

app.get("/profile", (req, res) => {
  res.render("profile");
});

//routes search

app.get("/countries/:name", (req, res) => {
  const { name } = req.params;
  const countries = [
    { slug: "poland", name: "Polska" },
    { slug: "malta", name: "Malta" },
  ];

  const findCountry = countries.find((x) => x.slug === name);

  res.render("countries", {
    name: findCountry?.name,
    countries,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.render("errors/404");
});

app.listen(port);
