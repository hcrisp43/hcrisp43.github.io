function displayCity() {
	var chosen = document.getElementById("CitySelect");
	var city = document.getElementById("City");
	city.value = chosen.value;
	displayPopulation();
}

function highlight(id) {
	var label1 = document.getElementById("yearLabel1");
	var label2 = document.getElementById("yearLabel2");
	var label3 = document.getElementById("yearLabel3");

	switch(id)
	{
		case "year1":
		{
			label1.style.backgroundColor = "#559E54";
			label2.style.backgroundColor = "#A0DAA9";
			label3.style.backgroundColor = "#A0DAA9";
			break;
		}

		case "year2":
		{
			label1.style.backgroundColor = "#A0DAA9";
			label2.style.backgroundColor = "#559E54";
			label3.style.backgroundColor = "#A0DAA9";
			break;
		}

		case "year3":
		{
			label1.style.backgroundColor = "#A0DAA9";
			label2.style.backgroundColor = "#A0DAA9";
			label3.style.backgroundColor = "#559E54";
			break;
		}
	}

	displayPopulation();
}

function displayPopulation() {
	var city = document.getElementById("City");
	var year1 = document.getElementById("year1");
	var year2 = document.getElementById("year2");
	var year3 = document.getElementById("year3");
	var pop = document.getElementById("population");

	switch(city.value)
	{
		case "":
		{
			pop.value = "";
			break;
		}
		case "San Diego":
		{
			if(year1.checked)
			{
				pop.value = "1,110,549";
			}
			if(year2.checked)
			{
				pop.value = "1,386,932";
			}
			if(year3.checked)
			{
				pop.value = "1,427,720";
			}
			break;
		}
		case "San Jose":
		{
			if(year1.checked)
			{
				pop.value = "8,949,943";
			}
			if(year2.checked)
			{
				pop.value = "1,109,343";
			}
			if(year3.checked)
			{
				pop.value = "1,427,720";
			}
			break;
		}
		case "San Francisco":
		{
			if(year1.checked)
			{
				pop.value = "776,733";
			}
			if(year2.checked)
			{
				pop.value = "873,965";
			}
			if(year3.checked)
			{
				pop.value = "883,255";
			}
			break;
		}
		case "Sacramento":
		{
			if(year1.checked)
			{
				pop.value = "407,018";
			}
			if(year2.checked)
			{
				pop.value = "524,943";
			}
			if(year3.checked)
			{
				pop.value = "525,398";
			}
			break;
		}
		case "San Bernadino":
		{
			if(year1.checked)
			{
				pop.value = "184,401";
			}
			if(year2.checked)
			{
				pop.value = "222,101";
			}
			if(year3.checked)
			{
				pop.value = "224,706";
			}
			break;
		}
		case "Los Angeles":
		{
			if(year1.checked)
			{
				pop.value = "3,694,820 ";
			}
			if(year2.checked)
			{
				pop.value = "3,694,820 ";
			}
			if(year3.checked)
			{
				pop.value = "3,983,540";
			}
			break;
		}
	}
}