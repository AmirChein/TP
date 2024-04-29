const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
    },
  pais: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  FechaN: {
    type: String,
    required: true
  },

  sponsor: {
    type: String,
    required: true
  },
  rquipo: {
    type: String,
    require: true
  },
  liga: {
    type: String,
    required: true
  },
  posicion: {
    type: String,
    require: true
  }

});

module.exports = mongoose.model('user', userschema);


