const express = require('express');
const app = express();
const apiRoutes = require('./routes/userRoute');
require('dotenv/config');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api',apiRoutes);


app.listen(process.env.PORT || 5000,()=>{
    console.log('application on http://localhost:'+process.env.PORT+'/api');
});
