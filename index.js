var router=require('./one');
var express=require('express');
var app=express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/one',router);
app.listen(8000,()=>{
console.log("server is working on port no:8000");

})