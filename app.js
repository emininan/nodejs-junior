var express=require('express');
var path=require('path');
var ejsLayouts=require('express-ejs-layouts');
var routeLogin=require('./routes/loginRouters');
var routeHome=require('./routes/homeRouters');
var app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(ejsLayouts);
app.use('/login',routeLogin);
app.use('/',routeHome);


app.listen(3000); 


