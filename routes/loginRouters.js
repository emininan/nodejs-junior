var express=require('express')
var ctrlLogin =require('../controller/loginController');

var router=express.Router();

router.get('/',ctrlLogin.index);

module.exports=router;