var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Mazda = require('../models/autos');

router.get('/mazda',function(req,res,next){
	/*var data={autos:[]};
	var auto={};
	auto.nombre="Mazda 3  ";
	auto.foto="https://www.mazda.mx/siteassets/mazda-mx/mycos-2019/mazda-3-sedan/vlp/versiones/mazda-3-sedan-vlp-versiones-i.jpg"
	data.autos.push(auto);

	auto=null;
	var auto={};
	auto.nombre="Mazda 6  ";
	auto.foto="https://www.romakurumamazda.com/wp-content/uploads/2018/04/MAZDA6_GRANDE.jpg"
	data.autos.push(auto);

	auto=null;
	var auto={};
	auto.nombre="Mazda cx3";
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg"
	data.autos.push(auto);

	auto=null;
	var auto={};
	auto.nombre="Mazda cx3";
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg"
	data.autos.push(auto);

	auto=null;
	var auto={};
	auto.nombre="Mazda cx3";
	auto.foto="https://www.coches.com/fotos_historicas/mazda/CX-3/high_318b730d19545c6351f312d234cb153c.jpg"
	data.autos.push(auto);
*/
	Mazda.find({},function(err,data){
		//console.log(data);
		var x={autos:data};
		res.render("./galeria/mazda",x);
	});

});

router.get('/yisus',function(req,res,next){
	res.render('prueba_yisus');//el nombre de un view terminacion hbs
});

module.exports =router;