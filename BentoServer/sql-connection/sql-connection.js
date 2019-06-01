const sql = require('mssql/msnodesqlv8')

const config = {
  server: 'localhost',
  database: 'BentoBase',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
}

const connect = {
  getBentoList: async (callback) => {
      try {
        const pool = new sql.ConnectionPool(config)
        
        pool.connect().then((err) => {

          const query = `select bento.Id as id
            ,bento.Title as title
            ,bento.Name as name
            ,season.Name as season
          from dbo.Bento as bento
          join dbo.Season as season
            on bento.Season_Id = season.Id`

          pool.request().query(query, (err, res) => {
            if (err) {
              console.dir(err)
            } else {
              callback(res)
            }
          })
        })
      } catch (err) {
        console.dir(err)
      }
  }
}

  
module.exports = connect