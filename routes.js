const CLIENT_ID = "552410470069-740ji948mbmsp75mml44lbvrd109goop.apps.googleusercontent.com"; //TODO

exports.index = function(req, res) {
  res.render("index", {client_id: CLIENT_ID});
}
