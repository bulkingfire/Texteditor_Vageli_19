const route1 = require('path');

module.exports = (app) =>



  app.get('/', (req, res) =>

    res.sendFile(route1.join(__dirname, '../client/dist/index.html'))

  );