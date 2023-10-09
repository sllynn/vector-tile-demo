
var path = require('path');
function handleRequest (req, res) {
  res.status(200).sendFile(path.resolve(__dirname + '../../../public/mapbox-demo.html'))
}

module.exports = handleRequest
