const express = require("express");
const serverless = require('serverless-http');
const app = express();

const router = express.Router();
app.use(express.json());
const port = process.env.PORT || 3000;

//Cors
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

const EspecieController = require("./controllers/EspecieController");
const BiologoController = require("./controllers/BiologoController");

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

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);