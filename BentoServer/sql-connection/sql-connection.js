const sql = require('mssql/msnodesqlv8')

const config = {
  // user: 'DESKTOP-MKNCJET\\yarpe',
  // password: '',
  server: 'localhost',
  database: 'BentoBase',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
}


const connect = async () => {
    try {

      const pool = new sql.ConnectionPool(config)
      
      pool.connect().then((err) => {

        pool.request().query(`select * from dbo.Season`, (err, res) => {
          if (err) {
            console.dir(err)
          } else {
            console.dir(res)
          }
        })

      })
    } catch (err) {
      console.dir(err)
    }
  }
  
module.exports = connect