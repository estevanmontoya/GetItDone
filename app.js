const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const app = express();

var db;

MongoClient.connect('mongodb://localhost:27017/taskone', (err, client) => {
  if (err) return console.log(err)
  db = client.db('taskone')
  app.listen(3000, () => {
    console.log('Your application is running: http://localhost:' + 3000);
  })
})

// Set parsing
app.use(bodyParser.urlencoded({extended: true}));

// Set Views
app.set('views', __dirname + '/views'); // Set views directory
app.set('view engine', 'pug'); // Set view engine
app.use('/public', express.static(__dirname + '/public')); // Use public directory

// Set Routes

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/list', (req, res) => {
  db.collection('tasks').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('list', {tasks: result});
  })
});

app.post('/insert', (req, res) => {
  db.collection('tasks').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('Saved to database')
    res.redirect('/list')
  })
});
