 const databaseService = require('./databaseService')
 
 function fetchData(req, res) {
    res.send(databaseService.fetchData())
}
 module.exports = { fetchData }