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
  getBentoList: async (callback, id) => {
      try {
        const pool = new sql.ConnectionPool(config)
        
        pool.connect().then((err) => {
          // build sql query
          let query = `select bento.Id as id
              ,bento.Title as title
              ,bento.Name as name
              ,season.Name as season
            from dbo.Bento as bento
            join dbo.Season as season
              on bento.Season_Id = season.Id`

          if (id) {
            query += `  where bento.Id = ${id}`
          }
          
          // request data
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
  },
  getUnitsList: async (callback) => {
    try {
      const pool = new sql.ConnectionPool(config)
      
      pool.connect().then((err) => {
        // build sql query
        let query = `select units.Id as id
            ,units.Type as type
            ,units.Name as name
          from dbo.FormUnitTypes as units`
        
        // request data
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
  },
  getSeasonsList: async (callback) => {
    try {
      const pool = new sql.ConnectionPool(config)
      
      pool.connect().then((err) => {
        // build sql query
        let query = `select season.Id as id
            ,season.Name as season
          from dbo.Season as season`
        
        // request data
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
  },
  postBento: async (callback, values) => {
    //in progress
    try {
      const pool = new sql.ConnectionPool(config)
      
      pool.connect().then((err) => {
        // build sql query
        let query = `select bento.Id as id
            ,bento.Title as title
            ,bento.Name as name
            ,season.Name as season
          from dbo.Bento as bento
          join dbo.Season as season
            on bento.Season_Id = season.Id`

        if (id) {
          query += `  where bento.Id = ${id}`
        }
        
        // request data
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