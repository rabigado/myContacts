import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import bodyParser  from 'body-parser';
import routes from './routes/serverRoutes';
/*eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();



app.use(compression());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
