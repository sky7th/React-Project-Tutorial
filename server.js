const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get('/api/hello', (req, res) => {
  res.send({message: 'Hello Express!'});
})
*/

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '라이언',
      'birthday': '990212',
      'gender': '남자',
      'job': '모델'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '어피치',
      'birthday': '000423',
      'gender': '여자',
      'job': '학생'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '무지',
      'birthday': '971103',
      'gender': '남자',
      'job': '백수'
    }
  ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));