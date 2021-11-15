// Get dependencies
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const compression = require('compression');
const app = express();
app.use(compression());
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
// Parsers for POST data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

var port;
var server_detail = {};
var environment = process.env.ENV|| 'development';
var mode = process.env.MODE || 0;
var console = require('./server/routes/apis/console')(console);

if ( environment === 'production' ) {
    port = 5503;
    process.env.ENV='production';
    // server_detail = {host:"54.225.122.8", self_port:7700, protocol:"http://", env:"production"}
    server_detail = {host:"ip-cmsapi.chalkdigital.com", self_port:7700, protocol:"http://", env:"prod", kabootar_host : "35.212.39.109", kabootar_port : "8062",under_mode:mode}
} else if(environment === 'staging') {
    port = 5502;
    server_detail = {host:"54.225.122.8", self_port:7000, protocol:"http://", env:"stage", kabootar_host : "35.245.116.133", kabootar_port : "8042",under_mode:mode}
} else {
    port = 5501;
    server_detail = {host:"54.225.122.8", self_port:6600, protocol:"http://", env:"other",  kabootar_host : "35.212.41.207", kabootar_port : "8041",under_mode:mode}
}


var connection = require('./configs/database')(mongoose,);

app.enable('trust proxy');
app.use(function(req, res, next) {
  if(!req.secure) {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  next();
});

app.set('port', port);

/**
* Create HTTP server.
*/
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

// require('./server/routes/apis/create-campaigns/uploadVideoToS3',{ forceNew: true}).listen(server,console); 

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, () => console.log(`Server running on localhost:${port}`));
