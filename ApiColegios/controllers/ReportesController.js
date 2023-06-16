const { response } = require("express");
const Reportes = require("../models/ColegioModel");

const getReportes = async (req, res) => {
  let mensaje = "";

  try {
    const reportes = await Reportes.find();
    mensaje = "Consulta exitosa";
    res.json({
      ok: true,
      mensaje,
      reportes,
    });
  } catch (err) {
    mensaje = err.message;
    res.json({
      ok: false,
      mensaje,
    });
  }
};

const postReportes = async (req, res) => {
    let mensaje = "";
    const body = req.body;
    console.log(body)
    const reportes = new Reportes(body);
    try {
        await reportes.save();
        mensaje = "Reporte creado con éxito";
        res.json({
            ok: true,
            mensaje,
        });
    }catch(err){
        mensaje = err.message;
        res.json({
            ok: false,
            mensaje,
        });
    }
};

const putReportes = async (req, res) => {
    let mensaje = "";
    const {_id, ...body} = req.body;
    try{

        await Reportes.findOneAndUpdate({_id}, {...body});
        mensaje = "Reporte actualizado con éxito";
        res.json({
            ok: true,
            mensaje,
        });

    }catch(err){
        mensaje = err.message;
        res.json({
            ok: false,
            mensaje,
        });
    }
}

const deleteReportes = async (req, res) => {
    let mensaje = "";
    const {_id} = req.body;
    try{
        await Reportes.findOneAndDelete({_id});
        mensaje = "Reporte eliminado con éxito";
        res.json({
            ok: true,
            mensaje,
        });
    }catch(err){
        mensaje = err.message;
        res.json({
            ok: false,
            mensaje,
        });
    }
}

module.exports = {
  getReportes,
  postReportes,
  putReportes,
  deleteReportes
};
