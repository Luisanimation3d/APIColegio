const { Router } = require("express");
const routes = Router();

const { getReportes, postReportes, putReportes, deleteReportes } = require("../controllers/ReportesController");

routes.get("/", getReportes);
routes.post("/", postReportes);
routes.put("/", putReportes);
routes.delete("/", deleteReportes);

module.exports = routes;