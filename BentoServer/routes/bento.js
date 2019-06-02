const express = require('express')
const router = express.Router()
const sqlConnection = require('../sql-connection/sql-connection')

/* GET users listing. */
router.get('/', (req, res, next) => {

  // callback hell..........................
  var processResponse = (response) => {
    // console.dir(response.recordset)
    res.send(response.recordset)
  }

  sqlConnection.getBentoList(processResponse)

})

router.get('/:id', (req, res, next) => {
  // console.dir(req.params)
  // callback hell..........................
  var processResponse = (response) => {
    // console.dir(response.recordset)
    res.send(response.recordset)
  }

  sqlConnection.getBentoList(processResponse, req.params['id'])

})

module.exports = router
