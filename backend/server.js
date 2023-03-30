// modules
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const addressesExampleRouter = require("./routes/addressesExampleRoutes");
const addressUserRouter = require("./routes/addressUserRoutes")

// config
const port = 5000;

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/address", addressesExampleRouter)
app.use("/api/addressUser", addressUserRouter)

app.get("/", (req, res) => {
    res.json({ message: "Rota teste"})
})

// mongoDB connection
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.06ovsjg.mongodb.net/users?retryWrites=true&w=majority`,
);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/address", addressesExampleRouter)
app.use("/api/addresUser", addressUserRouter)

app.get("/", (req, res) => {
    res.json({ message: "Rota teste"})
})

app.listen(port, () => {
    console.log(`Our variable ${process.env.MY_VARIABLE}`)
    console.log(`Backend is running on port ${port}`)
})