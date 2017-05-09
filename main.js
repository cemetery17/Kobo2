//Requesting access to KoboCat API
var xhr = new XMLHttpRequest();


//api token: 24e6c56f18e08f27a95722824d44f5c33d38c0af
xhr.open("GET", "https://kc.kobotoolbox.org/o/authorize?response_type=code&client_id=yJpsm8ejyAi32QkPFAXaYao83iEVvpnoR86qH3yM&redirect_uri=http://localhost:8888/indexp.html&state=1234zyx");


xhr.open("POST", "https://kc.kobotoolbox.org/o/token/?client_id=yJpsm8ejyAi32QkPFAXaYao83iEVvpnoR86qH3yM&client_secret=EEQvqeZf3WMFBitQGPNe1Aahl2NKvES2ARKuOEufHXzoqPPvXBrqftz2cWRdYrDO6NYcULbOwJKSztcFUzJ8ai0OvE2AVfU49iPWvfBkFj0CoIn5iOYsiWhUmGyou8Nt&grant_type=authorization_code&code=yKnI3jqfGw2o3uxYMK9HC5XiSHZ1jd&redirect_uri=http://localhost:8888/indexp.html"); 
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
xhr.setRequestHeader("Authorization", "Basic " + btoa("yJpsm8ejyAi32QkPFAXaYao83iEVvpnoR86qH3yM:EEQvqeZf3WMFBitQGPNe1Aahl2NKvES2ARKuOEufHXzoqPPvXBrqftz2cWRdYrDO6NYcULbOwJKSztcFUzJ8ai0OvE2AVfU49iPWvfBkFj0CoIn5iOYsiWhUmGyou8Nt"));


xhr.open("GET", 'https://kc.kobotoolbox.org/api/v1/data/91203?format=json');
xhr.setRequestHeader("Authorization", "Bearer " + "aTXCRMKDwuQWENkaOpiq65lyv3s98B");




//xhr.open("GET", "https://kc.kobotoolbox.org/api/v1/token");

//xhr.open("POST", "https://kc.kobotoolbox.org/api/v1/o/authorize?grant_type=authorization_code&code=24e6c56f18e08f27a95722824d44f5c33d38c0af&client_id=cc2a0cqeojZrK3L1CEhBj01qCZlYmVtHRCRd5PCD&redirect_uri=http://localhost:8000?state=xyz&code=24e6c56f18e08f27a95722824d44f5c33d38c0af");
//xhr.setRequestHeader("Authorization", "Basic " + "24e6c56f18e08f27a95722824d44f5c33d38c0af:ihab6W9lMjeJcLnWKRhY4vAyy2DYha1EIVPOX6LdgkofRQ7V3OewpctMSXVHfcVUYSNHVWXgXvbyMAjRqESfabp8QbZyjqeYZesnoaWY9vts8XMCoqFw6MM20B9D3QDK");


//xhr.open("GET", "https://kc.kobotoolbox.org/api/v1/data/91203?format=json",true,"teamgraves17","teamgraves17");
//xhr.setRequestHeader("Authorization", "Basic " + btoa("teamgraves17:teamgraves17"));


//when the page loads, take data retrieved from Kobo API and put it into a table and 
//display Kobo data in console

xhr.onload = function(){
	var ourData = JSON.parse(xhr.responseText);
	console.log(ourData);

       var html = '<table id=myTable border="1">';
        //$.each(ourData.County, function(key, value){
        for(i in ourData){
            html += '<tr>';
            html += '<td>' + ourData[i].County + '</td>';
            html += '<td>' + ourData[i].Uploaded + '</td>';
            html += '</tr>';
        };
        html += '</table>';

//Use search bar to filter through data

        $('div').html(html);
$("#myInput").keyup(function() {
	var rows = $("#myTable").find("tr").hide();
	var data = this.value.split(" ");
	$.each(data, function(i, v) {
		rows.filter(":contains('" + v + "')").show();
	});
});
	
	



}
//Check status of connection in console(200 == success)
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);








