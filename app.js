const express = require('express');
const app = express();

// Set Views
app.set('views', __dirname + '/views'); // Set views directory
app.set('view engine', 'pug'); // Set view engine
app.use('/public', express.static(__dirname + '/public')); // Use public directory

// Set Routes

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/list', (req, res) => {
  res.render('list');
})

// Set Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Your application is running: http://localhost:' + port);
});
