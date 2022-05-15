const express = require("express");
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

const EspecieController = require("../src/controllers/EspecieController");
const BiologoController = require("../src/controllers/BiologoController");
const UbicacionController = require("../src/controllers/UbicacionController");
const UsuarioController = require("../src/controllers/UsuarioController");

router.get("/", (req, res) => {
    res.json({message: "alive"});
});

router.get("/biologo", async (req, res) => { res.json(await(BiologoController.getList())); });
router.get("/biologo/:id", async (req, res) => {res.json(await (BiologoController.getById(req.params.id)));});
router.post("/biologo", async (req, res) => {res.json(await (BiologoController.create(req.body)));});
router.put("/biologo/:id", async (req, res) => {res.json(await (BiologoController.update(req.params.id, req.body)));});
router.delete("/biologo/:id", async (req, res) => {res.json(await (BiologoController.delete(req.params.id)));});

router.get("/especies", async (req, res) => { res.json(await(EspecieController.getList())); });
router.get("/especies/:id", async (req, res) => {res.json(await (EspecieController.getById(req.params.id)));});
router.post("/especies", async (req, res) => {res.json(await (EspecieController.create(req.body)));});
router.put("/especies/:id", async (req, res) => {res.json(await (EspecieController.update(req.params.id, req.body)));});
router.delete("/especies/:id", async (req, res) => {res.json(await (EspecieController.delete(req.params.id)));});

router.get("/ubicaciones", async (req, res) => { res.json(await(UbicacionController.getList())); });
router.get("/ubicaciones/:id", async (req, res) => {res.json(await (UbicacionController.getById(req.params.id)));});
router.post("/ubicaciones", async (req, res) => {res.json(await (UbicacionController.create(req.body)));});
router.put("/ubicaciones/:id", async (req, res) => {res.json(await (UbicacionController.update(req.params.id, req.body)));});
router.delete("/ubicaciones/:id", async (req, res) => {res.json(await (UbicacionController.delete(req.params.id)));});

router.get("/usuarios/:id", async (req, res) => {res.json(await (UsuarioController.getById(req.params.id)));});
router.post("/usuarios", async (req, res) => {res.json(await (UsuarioController.create(req.body)));});

app.use(bodyParser.json());
app.use('/.netlify/functions/api', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);