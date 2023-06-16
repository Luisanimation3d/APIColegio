const express = require("express");

const dbConnection = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.reportesPath = "/api/reportes";

    // middleware
    this.middlewares();

    // Rutas
    this.routes();

    // Conección
    this.conectarDb();
  }

  middlewares() {
    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*'); // Cambia '*' por el dominio permitido si es necesario
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });
    
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.reportesPath, require("../routes/ReportesRoute"));
  }

  async conectarDb() {
    await dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
