// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const authRouter = require("./routes/authRoutes");

// config
const dbName = "databaseRoutering"
const port = 5000;


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
    res.json({ message: "Rota teste"})
})

// mongoDB connection
mongoose.connect(
    `mongodb://localhost/${dbName}`,
);

app.listen(port, () => {
    console.log(`backend rodando na porta ${port}`)
})