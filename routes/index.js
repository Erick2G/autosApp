var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Mazda = require('../models/autos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'autosApp' });
});

router.get('/mazda',function(req,res,next){
	var infoMazda={};
	infoMazda.pais='Yisus help us';
	infoMazda.sectorVentas='Hola que hace';
	infoMazda.anioFundacion='1929';
	infoMazda.logo='https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png';
	res.render('mazda',infoMazda);
});
router.get('/dodge',function(req,res,next){
	var infoDodge={};
	infoDodge.pais='United States';
	infoDodge.sectorVentas='Comercial';
	infoDodge.anioFundacion='-- Desde 1900 --';
	infoDodge.logo='https://s3.amazonaws.com/comparamejor-wp/uploads/2016/03/Dodge-LOGO-1.png';
	res.render('dodge',infoDodge);
});
router.post('/alta',function(req,res,next){
	//desde un html obtenemos info del auto, se queda en req, despues construir modelo mongo
	//crear objeto mongo y hacer insert
	var miMazda = Mazda({
		nombre:req.body.nombre,// de donde toma la info
		foto:req.body.foto
	});
	miMazda.save(function(err,data){
		if(err){
			console.log('error');
		}else{
			res.render('resultadoAlta',data);
		}
	});//para procesar la retrollamada agregamos un callback
});

module.exports = router;