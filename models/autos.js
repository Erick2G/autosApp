var mongoose = require('mongoose');//importando mongoose
var Schema = mongoose.Schema;//nos permite crear tablas o colecciones

var AutoMazda = Schema({//crear un nuevo esquema
	nombre:String,
	foto:String
});
module.exports=mongoose.model('Mazda',AutoMazda);//exportamos como modulo