const express = require("express");
const { initializeDB } = require("./config/db-config");

const PORT = 8090;

const app = express();

app.use(express.json());

app.listen(PORT, async() => {
    await initializeDB();
    console.log(`Server runing in ${PORT}`)
})