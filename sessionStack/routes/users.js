var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = {
    name: 'Victor Jaha',
    job: 'Tech Author'
  };

  res.status(200).send(data);
});

router.post('/', function(req, res, next) {
  const {name, job} = res.post();
  const data = {name, job}
  res.status(200).send(data);
})

module.exports = router;
