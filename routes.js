const constants = require('./constants.js');

exports.index = function(req, res) {
  res.render("index", {client_id: constants.CLIENT_ID});
}
