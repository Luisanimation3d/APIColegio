const { Schema, model } = require("mongoose");

const ReporteSchema = Schema({
  direccion: {
    type: String,
    required: [true, "La dirección es obligatoria"],
  },
  latitud: {
    type: Number,
    validate: {
      validator: (value) => {
        return (value >= 6.14 && value <= 6.200)
      },
      message: (props) => `La latitud ${props.value} no es permitida`,
    },
    required: [true, "La latitud es obligatoria"],
  },
  longitud: {
    type: Number,
    validate: {
      validator: (value) => {
        return value >= -75.5 && value <= -75.43;
      },
      message: (props) => `La longitud ${props.value} no es permitida`,
    },
    required: [true, 'La longitud es obligatoria']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripcion es obligatoria'],
  },
  fachaReporte:{
    type: Date,
    default: Date.now
  }
});

module.exports = model('Reporte', ReporteSchema)
