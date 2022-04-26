var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M', 
				'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var senderKey =[];
var receiveKey = [];

function encrypt() {
	//Create sender key
	var inputKey = document.getElementById("inputKey").value.split("");
	senderKey = alphabet.slice(0);
	for(var i = 0; i < inputKey.length; i++)
	{
		//Remove every letter in input from alphabet
		if(senderKey.includes(inputKey[i]))
		{
			senderKey.splice(senderKey.indexOf(inputKey[i]), 1);
		}
	}
	//Concat input to front of array with removed letters from alphabet
	senderKey = inputKey.concat(senderKey);

	//Use senderKey to encrypt plain text
	var plainText = document.getElementById("plainText").value.toUpperCase();
	plainText = plainText.replace(/\s/g, '').split("");

	var cipherText = "";
	for(var i = 0; i < plainText.length; i++)
	{
		cipherText += senderKey[alphabet.indexOf(plainText[i])];
	}

	document.getElementById("cipherText1").value = cipherText.toLowerCase();

	//Create receiver key
	for(var i = 0; i < alphabet.length; i++)
	{
		var letter = alphabet[i];
		receiveKey.push(alphabet[senderKey.indexOf(letter)]);
	}

	//Create encrypted input key
	var encryptKey = "";
	for(var i = 0; i < inputKey.length; i++)
	{
		encryptKey += alphabet[receiveKey.indexOf(inputKey[i])];
	}

	document.getElementById("encryptKey1").value = encryptKey;
}

function decrypt() {
	var cipherText = document.getElementById("cipherText2").value.toUpperCase().split("");
	var decrypt = "";
	alert(alphabet);
	for(var i = 0; i < cipherText.length; i++)
	{
		
		decrypt += receiveKey[alphabet.indexOf(cipherText[i])];
	}

	document.getElementById("decryptText").value = decrypt;
}

