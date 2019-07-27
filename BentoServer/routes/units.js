const express = require('express')
const router = express.Router()
const sqlConnection = require('../sql-connection/sql-connection')

/* GET units listing. */
router.get('/', (req, res, next) => {
  var processResponse = (response) => {
    res.send(response.recordset)
  }

  sqlConnection.getUnitsList(processResponse)

})

module.exports = router
