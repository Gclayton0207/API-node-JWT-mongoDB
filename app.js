require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

//config json response
app.use(express.json())

//models
const User = require("./models/User")

//rota inicial
app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "Bem vindo a nossa API!" });
});

//rota de registro de usuario
app.post("/auth/register", async (req, res) => {

    const{name,email,password,confirmPassword} = req.body

    //validações
    if(!name) {
        return res.status(422).json({mensagem: "O nome é obrigatório!"})
    }

})

//credenciais de acesso ao banco de dados
const dbUser = process.env.DB_USER 
const dbPassword = process.env.DB_PASS

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.chfua6d.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(3000);
    console.log("banco conectado!");
  })
  .catch((err) => console.log(err));
