var express = require('express');
var router = express.Router();
const db = require('../sql-connection/sql-connection');


/* GET users listing. */
router.get('/', (req, res, next) => {

  res.send({
    id: 0,
    name: 'BENTO #1',
    title: 'Makaron z truskawkami i serem'
  });

  db();
});

module.exports = router;
