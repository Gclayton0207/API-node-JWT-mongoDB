require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "Bem vindo a nossa API!" });
});

const dbUser = process.env.DB_USER 
const dbPassword = process.env.DB_PASS

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.chfua6d.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(3000);
    console.log("banco conectado!");
  })
  .catch((err) => console.log(err));
