const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890()^@&#*$+%=";

var timer;

function pageLoad() {
	$(document).ready(function(){
		//Show page 1, clear values
		$("#page1").show();
		$("#page2").hide();
		$("#errorMsg1").hide();
		$("#captcha").text("");
		$("#userText").val('');

		//Create initial captcha
		generateCaptcha();

		//Set timer for 20s to make new captcha
		timer = setInterval(generateCaptcha, 20000);
	});
}

function generateCaptcha() {
	//Clear value
	$("#captcha").text("");
	var randomString = "";
	//Choose a random length from 8-16
	var randomLength = Math.floor(Math.random() * 9) + 8;

	for(var i = 0; i < randomLength; i++)
	{
		//Choose random character from available chars
		var randomCharacter = chars[Math.floor(Math.random() * chars.length)];
		randomString += randomCharacter;
	}

	$("#captcha").text(randomString);
}

function compareCap() {
	if($("#userText").val() != $("#captcha").text())
	{
		$("#errorMsg1").show();
		clearInterval(timer);
		setTimeout(pageLoad, 3000);
	}
	else
	{
		//User input matches captcha
		page2Load();
	}
}

function page2Load() {
	//Clear timer, show page 2
	clearInterval(timer);
	$("#page1").hide();
	$("#page2").show();
	$("#errorMsg2").hide();
	$("#successMsg").hide();

}

function checkReq() {
	//Clear messages
	$("#errorMsg2").hide();
	$("#successMsg").hide();

	//Check first and last name fields
	if($("#firstName").val() == '')
	{
		alert("Please enter First Name");
	}

	if($("#lastName").val() == '')
	{
		alert("Please enter Last Name");
	}

	//Check email and password, highlight which fails
	var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.(com|net|org|mil|edu|gov)$/;

	var emailVal = $("#emailAdd").val();

	if($("#passwordFirst").val() == $("#passwordSecond").val() 
		&& $("#passwordFirst").val().length >= 12 && $("#passwordSecond").val().length >= 12)
	{
		if(emailExp.test(emailVal))
		{
			$("#successMsg").show();
			$("#errorMsg2").hide();
		}
		else
		{
			$("#errorMsg2").show();
			$("#successMsg").hide();

			//Highlight box showing error
			document.getElementById("emailAdd").style.backgroundColor = "#EE0000";
			setTimeout(function(){
				document.getElementById("emailAdd").style.backgroundColor = "#FFFFFF";
			}, 1000);
			
		}
	}
	else
	{
		$("#errorMsg2").show();
		$("#successMsg").hide();
		//Highlight password fields
		document.getElementById("passwordFirst").style.backgroundColor = "#EE0000";
		document.getElementById("passwordSecond").style.backgroundColor = "#EE0000";
		setTimeout(function(){
			document.getElementById("passwordFirst").style.backgroundColor = "#FFFFFF";
			document.getElementById("passwordSecond").style.backgroundColor = "#FFFFFF";
		}, 1000);
	}
	
		
}