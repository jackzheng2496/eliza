var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var el = require('elizabot');
var ejs = require('ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

/* Getting the homepage for eliza */
app.get('/eliza', function(req, res) {
	console.log('here at GET /eliza');
	res.sendFile('/data/www/eliza/page.html');
});

/* posting for eliza first time is diff */
app.post('/eliza', function(req, res) {
	console.log('this is bad, POST /eliza for name');
	res.render('doctor.ejs', {name: req.body.name, date: getdate()});
});

app.post('/eliza/DOCTOR', function(req, res) {
	console.log('here in POST /eliza/DOCTOR');
	var data = req.body.human;
	var elizar = getelizaresponse(req.body.human);
	console.log(elizar);

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({eliza: elizar, human: req.body.human}));
	res.end();
});

app.listen(8080);

function getdate() {
	var dateTime = require('node-datetime');
	var dt = dateTime.create();
	var formatted = dt.format('Y-m-d H:M:S');
	return formatted;
};

// see something about this
function getelizaresponse(human) {
	var eliza = new el();
	var reply = eliza.transform(human);
	return reply;
};
