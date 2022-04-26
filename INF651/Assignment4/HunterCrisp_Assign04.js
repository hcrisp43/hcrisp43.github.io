function calculateDate()
{
	//Hide page 1, show page 2
	var d = new Date();
	var p1 = document.getElementById("page1");
	var p2 = document.getElementById("page2");
	p1.style.display = "none";
	p2.style.display = "grid";
	document.getElementById("calcYear").value = d.getFullYear();
	
	//Determine which month it is
	var month = document.getElementById("getMonth").value.substring(0,2);
	switch(month)
	{
		case "01": document.getElementById("calcMonth").value = "January"; break;
		case "02": document.getElementById("calcMonth").value = "Februrary"; break;
		case "03": document.getElementById("calcMonth").value = "March"; break;
		case "04": document.getElementById("calcMonth").value = "April"; break;
		case "05": document.getElementById("calcMonth").value = "May"; break;
		case "06": document.getElementById("calcMonth").value = "June"; break;
		case "07": document.getElementById("calcMonth").value = "July"; break;
		case "08": document.getElementById("calcMonth").value = "August"; break;
		case "09": document.getElementById("calcMonth").value = "September"; break;
		case "10": document.getElementById("calcMonth").value = "October"; break;
		case "11": document.getElementById("calcMonth").value = "November"; break;
		case "12": document.getElementById("calcMonth").value = "December"; break;
	}

	//Determine if year is a leap year
	var leapYear = parseInt(document.getElementById("isLeapYear").value);
	if(leapYear % 4 == 0 && leapYear % 100 == 0 && leapYear % 400 == 0)
	{
		document.getElementById("calcLeapYear").value = String(leapYear) + " is a Leap Year.";
	}
	else
	{
		document.getElementById("calcLeapYear").value = String(leapYear) + " is not a Leap Year";
	}

	//Determine what century the year is in

	var century = document.getElementById("getCentury").value;
	var calcCent = 0;
	if(century.length < 3)
	{
		calcCent = 1;
	}
	else if(century.length == 3)
	{
		calcCent = parseInt(century[0]) + 1;
	}
	else
	{
		calcCent = parseInt(century.substring(0,2)) + 1;
	}
	
	document.getElementById("calcCentury").value = "The century for year " + century + " is " + calcCent;

	//Determine Day of week
	var day = document.getElementById("getDayOfWeek").value;
	switch(day)
	{
		case "0": document.getElementById("calcDayOfWeek").value = "Monday"; break;
		case "1": document.getElementById("calcDayOfWeek").value = "Tuesday"; break;
		case "2": document.getElementById("calcDayOfWeek").value = "Wednesday"; break;
		case "3": document.getElementById("calcDayOfWeek").value = "Thursday"; break;
		case "4": document.getElementById("calcDayOfWeek").value = "Friday"; break;
		case "5": document.getElementById("calcDayOfWeek").value = "Saturday"; break;
		case "6": document.getElementById("calcDayOfWeek").value = "Sunday"; break;
	}
}

function showP3()
{
	//Hide page 2, show page 3
	var p2 = document.getElementById("page2");
	var p3 = document.getElementById("page3");
	p2.style.display = "none";
	p3.style.display = "grid";
}

function isPalindrome()
{
	//Determine if it is a palindrome
	var p = document.getElementById("palindromeBox");
	var result = document.getElementById("palResult");
	//Turn all letters into lowercase and turn into an array of chars,
	//then reverse the array, and turn it back into a single string
	if(p.value.toLowerCase() == p.value.split('').reverse().join('').toLowerCase())
	{
		result.value = "Yes";
	}
	else
	{
		result.value = "No";
	}
}