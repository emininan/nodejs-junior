var express=require('express')
var ctrlLogin =require('../controller/homeController');

var router=express.Router();

router.get('/',ctrlLogin.home);

module.exports=router;