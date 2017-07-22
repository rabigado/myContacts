
let path= require('path');
let express= require('express');
let open= require('opn');
let compression= require('compression');
let bodyParser = require('body-parser');
let routes= require( './tools/routes/serverRoutes');
/*eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = module.exports = express();

app.use(compression());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routes);
 
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(port);
