class SelectOption {
	constructor(val) {
		this.option = document.createElement('option');
		this.option.value = val;
		this.option.innerHTML = val;
	}

}

class Vehicle {
	constructor(b, m) {
		this.bodyType = b;
		this.mpg = m;
	}

}

var destinations = {"San Diego to San Francisco - 500 miles": 500,
					"San Diego to Las Vegas - 330 miles": 330,
					"San Diego to Las Angeles - 120 miles": 120}

function populateSelect() {
	for(var i in destinations)
	{
		var d = new SelectOption(i);
		document.getElementById("destination").appendChild(d.option);
	}
}

var date = new Date();
function updateDate() {
	
	var month = parseInt(date.getMonth()) + 1;
	var day = date.getDate();
	var year = String(date.getFullYear()).substr(2);
	document.getElementById("Date").value = month + "/" + day + "/" + year;
}

var cars = {"Compact": 45, "Sub Compact": 113, "Station Wagon": 26}

function calculateFinal() {
	var destOption = document.getElementById("destination").value;
	
	var carOptions = document.getElementsByName("carCheck");

	var body = "";
	var mpg = 0;

	//Figure out which car was chosen
	for(var i = 0; i < carOptions.length; i++)
	{
		if(carOptions[i].checked)
		{
			mpg = carOptions[i].value;
		}
	}

	//Determine which body was chosen
	for(var x in cars)
	{
		if(cars[x] == mpg)
		{
			body = x;
		}
	}

	//Create new object instance of Vehicle class
	var carChosen = new Vehicle(body, mpg);

	var distance = 0;

	//Determine which destination was chosen
	for(var x in destinations)
	{
		if(x == destOption)
		{
			distance = destinations[x];
		}
	}

	//Set total price of gas needed for trip
	var priceGas = document.getElementById("priceInput").value;
	document.getElementById("totalCost").value = priceGas * (distance/carChosen.mpg);

	//Total drive time is distance divided by rate
	var totalDriveTime = distance / 65;

	var timeChosen = document.getElementsByName("timeStart");
	var timeStart = 0;

	//Find which radio button was pressed for value
	for(var i = 0; i < timeChosen.length; i++)
	{
		if(timeChosen[i].checked)
		{
			timeStart = timeChosen[i].value;
		}
	}

	//Calculate final time by taking remainder of total time divided by 24
	var finalTime = Number.parseFloat(Math.round((timeStart + totalDriveTime) % 24)).toFixed(0);
	//Calculate final day by adding total time divided by 24 to the current day
	var finalDay = parseInt(date.getDate()) + parseInt(Number.parseFloat(Math.round(((timeStart + totalDriveTime) / 24))).toFixed(0));
	var finalMonth = parseInt(date.getMonth()) + 1;
	document.getElementById("finalTime").value = finalMonth + "/" + finalDay + " " +
												 finalTime;
	
}


