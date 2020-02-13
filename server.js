const express = require('express');

const app = express();
app.use(express.json()); // this is a middleware

app.use((req, res, next) => {
  // custom middleware
  console.log('Incomeing request!');
  console.log(req.originalUrl);
  console.log(req.headers['user-agent']);
  next();
});

app.get('/calvin', (req, res) => {
  console.log(req.query);
  res.send(`Hello, ${req.query.hello}`);
});

app.post('/post-test', (req, res) => {
  console.log(req.body);
  res.send('Worked!');
});

app.get('*', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000);
