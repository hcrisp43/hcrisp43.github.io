function addEvents() {
	document.getElementById("colorBox").addEventListener("keydown", event => {
		document.getElementById("colorBox").style.backgroundColor = "#ffff80";
	});
	document.getElementById("colorBox").addEventListener("keyup", event => {
		document.getElementById("colorBox").style.backgroundColor = "#66b3ff";
		alert("Letter "+ event.key+ " was pressed");
	});

	var c3 = document.getElementById("container3");

	document.body.addEventListener("keydown", event => {
		if(event.key == "ArrowUp")
		{
			while(c3.firstChild)
			{
				c3.removeChild(c3.firstChild);
			}
			var p = document.createElement("p");
			p.appendChild(document.createTextNode("E"));
			c3.appendChild(p);
			
		}
		if(event.key == "ArrowDown")
		{
			while(c3.firstChild)
			{
				c3.removeChild(c3.firstChild);
			}
			var p = document.createElement("p");
			p.style.fontSize = "small";
			p.appendChild(document.createTextNode("e"));
			c3.appendChild(p);
			
		}
	})

	
	window.addEventListener("mousemove", event => {
		var dot = document.createElement("div");
		dot.className = "dot";
		dot.style.left = event.clientX + "px";
		dot.style.top = event.clientY + "px";
		
		
		document.body.appendChild(dot);
	});
}
