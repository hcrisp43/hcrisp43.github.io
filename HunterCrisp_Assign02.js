function calculate(){
	//Grab each value from textboxes
	var a = parseInt(document.getElementById("boxA").value);
	var b = parseInt(document.getElementById("boxB").value);
	var c = parseInt(document.getElementById("boxC").value);

	//Calculate each root
	document.getElementById("x1").value = ((-b) + Math.sqrt((b*b) - (4*a*c)))/(2*a);
	document.getElementById("x2").value = ((-b) - Math.sqrt((b*b) - (4*a*c)))/(2*a);
}