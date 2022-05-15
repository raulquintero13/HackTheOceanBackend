const express = require("express");
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

const EspecieController = require("../src/controllers/EspecieController");
const BiologoController = require("../src/controllers/BiologoController");

router.get("/", (req, res) => {
    res.json({message: "alive"});
});


router.get("/biologo", async (req, res) => { res.json(await(BiologoController.getList())); });
router.get("/biologo/:id", async (req, res) => {res.json(await (BiologoController.getById(req.params.id)));});
router.post("/biologo", async (req, res) => {res.json(await (BiologoController.create(req.body)));});
router.put("/biologo/:id", async (req, res) => {res.json(await (BiologoController.update(req.params.id, req.body)));});
router.delete("/biologo/:id", async (req, res) => {res.json(await (BiologoController.delete(req.params.id)));});

app.use('/.netlify/functions/api', router);  // path must route to lambda

module.exports.handler = serverless(app);