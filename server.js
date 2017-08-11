const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


app.listen(port, ()=> {
  console.log('listening on port:', port);
})

app.use(express.static('public'));

// serve the index page
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/users', (req, res) =>{
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.send('Welcome to React');
});
