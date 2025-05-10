const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");
const formRoutes = require("./routes/form");

const app = express();

// Conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/MyMongoDB")
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Erro na conexão com o MongoDB:", error);
  });

// View engine setup (caso use handlebars no futuro)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Rotas da API
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/form", formRoutes);

// Rota fallback para SPA (Angular)
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
