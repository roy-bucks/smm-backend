const express = require('express'); 
const route = require('./routes'); 
const bodyParser = require('body-parser'); 
const path = require("path"); // path module
const cron = require('node-cron');

const cors=require('cors');


const app = express();
const port = 8080;


// dbConnect();
app.listen(port, () => {
  console.log(`website is listening on port ${port}!`)
});



app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));


// all static content
app.use(express.static(path.join(__dirname, "./assets/")));

//app static 
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');// root route to render the index.ejs view

/*IMPORTANT
  Middle ware for route
*/

// app.use((req, res, next)=> {
//   res.header('Access-Control-Allow-Origin: *');
//   res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//   next();
// });
app.use(cors({origin:true,credentials: true}));

const routes = require('./routes/index');
routes(app);
