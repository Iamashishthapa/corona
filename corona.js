var request = require('request');

var http = require('http');

request({
	uri: 'https://www.parsehub.com/api/v2/projects/tsd0Wcqini4G/run',
	method: 'POST',
	form: {
	  api_key: "tSL33T8L8PG3",
	}
  }, function(err, resp, body) {
	var obj = JSON.parse(body);
	var token=obj.run_token;
	console.log(token);
  });

  request({
	uri: 'https://www.parsehub.com/api/v2/projects/tsd0Wcqini4G/last_ready_run/data',
	method: 'GET',
	gzip: true,
	qs: {
	  api_key: "tSL33T8L8PG3",
	  format: "JSON"
	}
  }, function(err, resp, body) {
	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(body);
	}).listen(8080);
  });

  