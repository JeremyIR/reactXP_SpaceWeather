const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthController = require('./controllers/controller');

const app = express();
const router = express.Router();
mongoose.connect('mongodb://localhost:27017/test')
const port = 8000;

const protectedAction = function(req, res) {
  res.send("Here's some protected information!");
}

// serve the index page
router.route('/')
  .get((req, res)=> { res.sendFile(path.join(__dirname, './index.html')); });

router.route('/users')
  .get((req, res) =>{  res.send('Welcome to React'); });

router.route('/facebook_auth')
  .post(AuthController.facebookAuth);

router.route('/protected')
  .get([AuthController.requireAuth, protectedAction]);

app.use(express.static('../public'));
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use('/v1', router);

app.listen(port, ()=> {
  console.log('listening on port:', port);
})