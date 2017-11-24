const constants = require('./constants.js');
const auth = new (require('google-auth-library'));

// The user should already be signed in to Google and have authorized the app.
// This function verifies that the given id_token is valid, and then signs the
// user in to the app. If this is the first time we're seeing the user, we will
// add them to the database.
exports.googlesignin = function(req, res) {
  const id_token = req.body.id_token;
  const client = new auth.OAuth2(constants.CLIENT_ID, '', '');
  client.verifyIdToken(
    id_token, [constants.CLIENT_ID],
    (err, login) => {
      if (err) {
        res.send("Error", 500);
      } else {
        const user_gid = login.getPayload()['sub'];
        // TODO: add user to db
        res.send(user_gid, 200);
      }
    }
  );
}
