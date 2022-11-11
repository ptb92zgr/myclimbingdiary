const express = require("express");
const port = 3000;

const app = express();

//logging in / registration

app.get("/", (req, res) => {
  res.send("strona rejestracji/logowania");
});

//my profile - my ascents, settings

app.get("/profile", (req, res) => {
  res.send("mój profil - przejścia");
});
app.get("/profile/settings", (req, res) => {
  res.send("mój profil - ustawienia");
});

//routes search

app.get("/routes", (req, res) => {
  res.send(`wyszukiwarka dróg wspinaczkowych`);
});

app.get("/routes/:country", (req, res) => {
  const { country } = req.params;
  const countries = [
    { slug: "poland", country: "Polska" },
    { slug: "malta", country: "Malta" },
  ];
  const findCountry = countries.find((x) => x.slug === country);
  if (findCountry) {
    res.send(`Kraj: ${findCountry.country}`);
  } else {
    res.send(`Nie ma takiego kraju`);
  }

  res.send(`wyszukiwarka dróg wspinaczkowych - ${findCountry?.country}`);
});

app.get("/routes/:country:/:area", (req, res) => {
  res.send("wyszukiwarka dróg wspinaczkowych - kraj/strefa");
});

app.get("/routes/:country:/:area/:rock", (req, res) => {
  res.send("wyszukiwarka dróg wspinaczkowych - kraj/strefa/nazwa skały");
});

app.get("/kontakt", (req, res) => {
  res.send("kontakt");
});

app.listen(port);
