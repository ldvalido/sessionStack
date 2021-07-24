const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = {
    name: 'Victor Jonah',
    job: 'Technical Author',
  };
  res.status(200).send(data);
});

/* Add user to the list. */
router.post('/', function (req, res, next) {
  const { name, job } = req.post();
  const data = {
    name,
    job
  }
  res.status(200).send(data);
});

module.exports = router;