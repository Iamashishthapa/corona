fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "aec81745e7msh280ed132fb4096bp1e6b21jsn46e6828b7f18"
	}
})
.then(response => {
	//console.log(response);
    return response.json();
})
.then(function(data){
    let ram=JSON.stringify(data);
    document.getElementById("write").innerHTML = ram;
})
.catch(err => {
	console.log(err);
});