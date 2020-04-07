fetch('http://localhost:3000/Country')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		showInHtml(data);
	})
	.catch(function (err) {
		console.log('error: ' + err);
	});

function showInHtml(data) {
	var mainContainer = document.getElementById("textDisplay");
	var text = JSON.stringify(data);
	mainContainer.innerHTML = text;
}