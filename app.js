var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');

var routes = require('./routes.js');
var api = require('./api.js');

app.set('port', 8000);
app.use(require('morgan')('dev'));
app.use(bodyParser.json());

app.get('/', routes.index);

// Only start server if called from command line.
if (require.main === module) {
    app.listen(app.get('port'), function() {
        console.log('[' + app.get('env') + '] Server listening on port ' + app.get('port'));
    });
}
