const express = require('express');
const app = express();
const apiRoutes = require('./routes/userRoute');
require('dotenv/config');
var bodyParser = require('body-parser');
const cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

// app.use((req,res,next) => {
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({});
//     }
//     next();
// });

app.use('/api',apiRoutes);


app.listen(process.env.PORT || 5000,()=>{
    console.log('application on http://localhost:'+process.env.PORT+'/api');
});