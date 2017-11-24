const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const routes = require('./routes.js');
const api = require('./api.js');

app.set('port', 8000);
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //TODO: remove this
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.post('/api/googlesignin', api.googlesignin);

app.get('/', routes.index);

// Only start server if called from command line.
if (require.main === module) {
    app.listen(app.get('port'), function() {
        console.log('[' + app.get('env') + '] Server listening on port ' + app.get('port'));
    });
}
