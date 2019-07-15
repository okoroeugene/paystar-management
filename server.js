// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('public/build'));
// }

var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
var cors = require('cors')
app.use(cors())
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.set('port', process.env.PORT || 8083);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});