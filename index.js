const express = require('express');
const mongoMiddleware = require('./connectDB');
const bodyParser = require('body-parser');
const users = require('./models/users.js')

const app = express();
app.use(mongoMiddleware);
app.use(bodyParser());

const port = 3000;

app.post('/getName', async (req, res) => {
  console.log('Hello World!');
  console.log(req.body, "reqiuet")
  const userBody = req.body;
  let userData = new users(userBody);
  userData.save();
  res.status(200).send({success : true});
  // end();
  
  // const users = await req.db.collection('users').find().toArray();
  // console.log(users[0].name);
  // res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});