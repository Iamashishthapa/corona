let url="https://www.parsehub.com/api/v2/projects/tsd0Wcqini4G/last_ready_run/data",qs="tSL33T8L8PG3";
fetch(url + qs)
.then(response => {
	//console.log(response);
    return response.json();
})
.then(data => {
    let ram=JSON.stringify(data);
    document.getElementById("write").innerHTML = ram;
})
.catch(err => {
	console.log(err);
});