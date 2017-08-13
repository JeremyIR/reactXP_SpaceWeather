const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthController = require('./controllers/controller');
const axios = require('axios');
const  xml2js = require('xml2js');
//const cors = require('cors')
 


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

  router.route('/users')
  .get((req, res) =>{  res.send('Welcome to React'); });

  router.route('/news')
  .get((req, res) => {
    axios.get('https://www.sciencedaily.com/rss/space_time.xml?cors=true')
      .then((response) => {
        var parseString = xml2js.parseString;
        parseString(response.data, (error, result) => {
          var news = result.rss.channel[0].item;
          res.send(news)
      });
    })
  })
  
router.route('/facebook_auth')
  .post(AuthController.facebookAuth);

router.route('/protected')
  .get([AuthController.requireAuth, protectedAction]);

  /*
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

*/

app.use(express.static('../public'));
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use('/v1', router);


app.listen(port, ()=> {
  console.log('listening on port:', port);
})