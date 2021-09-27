var months = ["January", "February", "March", "April", "May", "June", "July", 
	"August", "September", "October", "November", "December"];

function populateSelect()
{
	var select = document.getElementById("selectMonth");
	

	//Populate drop down with months array
	for(var i = 0; i < months.length; i++)
	{
		var newOption = document.createElement('option');
		newOption.value = months[i];
		newOption.innerHTML = months[i];
		select.appendChild(newOption);
	}
}

function updateCalendar() {
	//Clear calendar of any values
	var calendar = document.getElementById("calendar");
	var childrenCount = calendar.children.length;
	for(var r = 7; r < childrenCount; r++)
	{
		calendar.removeChild(calendar.children[calendar.children.length - 1]);
	}

	var month = document.getElementById("selectMonth").value;
	var d;
	var dayCount = 1;
	
	//Create a new date object based on month chosen in drop down
	for(var i = 0; i < months.length; i++)
	{
		if(months[i] == month)
		{
			d = new Date(2021, i);
			break;
		}
	}

	//Add empty days to start month on correct day
	for(var x = 0; x < d.getDay(); x++)
	{
		var emptyDay = document.createElement('input');
		emptyDay.className = "day1";
		emptyDay.readOnly = true;
		calendar.appendChild(emptyDay);
	}


	//Populate rest of first week
	for(var j = d.getDay(); j < 7; j++)
	{
		var newDay = document.createElement('input');
		newDay.className = "day1";
		newDay.readOnly = true;
		newDay.value = dayCount;
		dayCount++;
		calendar.appendChild(newDay);
	}

	//Determine total number of days in month
	var totalDays = 0;
	switch(d.getMonth())
	{
		case 0: case 2: case 4: case 6: case 7: case 9: case 11: totalDays = 31; break;
		case 1: totalDays = 28; break;
		case 3: case 5: case 8: case 10: totalDays = 30; break;
	}

	//Populate rest of month
	for(var z = 0; z < totalDays; z++)
	{
		if(dayCount > totalDays)
		{
			//Stop creating days if day count becomes larger than total days required
			break;
		}
		var newDay = document.createElement('input');
		newDay.readOnly = true;

		//Alternate week colors
		if(z < 7)
		{
			newDay.className = "day2";
			newDay.value = dayCount;
		}
		else if(z < 14)
		{
			newDay.className = "day1";
			newDay.value = dayCount;
		}
		else if(z < 21)
		{
			newDay.className = "day2";
			newDay.value = dayCount;
		}
		else if(z < 28)
		{
			newDay.className = "day1";
			newDay.value = dayCount;
		}
		else
		{
			newDay.className = "day2";
			newDay.value = dayCount;
		}

		//Increase day count and add new day object to calendar
		dayCount++;
		calendar.appendChild(newDay);
	}
}

function populateLabel() {
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturdy"];

	//Populate the day labels above the calendar
	for(var i = 0; i < days.length; i++)
	{
		var day = document.getElementById("dayLabel" + (i+1));
		var x = 0;
		day.value = days[i];
	}

	updateCalendar();
}