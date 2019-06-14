var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'autosApp' });
});
module.exports = router;
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

