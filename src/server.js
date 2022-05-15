const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const EspecieController = require("./controllers/EspecieController")

//Cors
const cors = require('cors');

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.get("/especies", async (req, res) => { res.json(await(EspecieController.getList())) });
app.get("/especies/:id", async (req, res) => {res.json(await (EspecieController.getById(req.params.id)))});
app.post("/especies", async (req, res) => {res.json(await (EspecieController.create(req.body)))});
app.put("/especies/:id", async (req, res) => {res.json(await (EspecieController.update(req.params.id, req.body)))});
app.delete("/especies/:id", async (req, res) => {res.json(await (EspecieController.delete(req.params.id)))});


// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});







var server = app.listen(port, () => {console.log(`Listening to requests on port ${port}`);});
var handler = function() {
    console.log('close server');
    server.close();
};
module.exports = {app, handler};