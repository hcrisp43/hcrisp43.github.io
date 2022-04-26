var phoneList = [
	{"version": "11", "Qty": "16", "SKU": "36513", "Color": "Graphite"},
	{"version": "11 Pro", "Qty": "3", "SKU": "44237", "Color": "Gold"},
	{"version": "12", "Qty": "5", "SKU": "55809", "Color": "Silver"},
	{"version": "12 Mini", "Qty": "20", "SKU": "71604", "Color": "Midnight Blue"},
	{"version": "13", "Qty": "11", "SKU": "55812", "Color": "Pacific Blue"},
	{"version": "13 Mini", "Qty": "4", "SKU": "68912", "Color": "Black"},
	{"version": "13 Pro", "Qty": "7", "SKU": "91337", "Color": "Silver"},
	{"version": "13 Max", "Qty": "5", "SKU": "46115", "Color": "Graphite"},
	{"version": "A11", "Qty": "6", "SKU": "13355", "Color": "Cream"},
	{"version": "A12", "Qty": "14", "SKU": "46631", "Color": "Black"},
	{"version": "A51", "Qty": "9", "SKU": "77431", "Color": "Silver"},
	{"version": "A52", "Qty": "2", "SKU": "51223", "Color": "Gold"},
	{"version": "Z Flip3 5G", "Qty": "10", "SKU": "81002", "Color": "Red"},
	{"version": "Z Fold2 5G", "Qty": "12", "SKU": "77221", "Color": "Blue"},
	{"version": "Z Fold3 5G", "Qty": "4", "SKU": "60332", "Color": "Black"}
];



function createRow(item, index) {
	var table = document.querySelector(".phoneTable");
	var newRow = document.createElement("tr");
	table.appendChild(newRow);
	newRow.appendChild(document.createTextNode(index + 1));

	var phoneBrand = document.createElement("td");
	phoneBrand.style.width = "125px";
	var phoneVersion = document.createElement("td");
	phoneVersion.style.width = "75px";
	phoneVersion.appendChild(document.createTextNode(item.version));
	if(index < 8)
	{
		phoneBrand.style.backgroundColor = "#ffcc66";
		phoneVersion.style.backgroundColor = "#ffcc66";
	}
	else
	{
		phoneBrand.style.backgroundColor = "#ff8c66";
		phoneVersion.style.backgroundColor = "#ff8c66";
	}
	
	if(index == 0)
	{
		phoneBrand.appendChild(document.createTextNode("Apple iPhone"));
	}
	if(index == 8)
	{
		phoneBrand.appendChild(document.createTextNode("Samsung Galaxy"));
	}

	newRow.appendChild(phoneBrand);
	newRow.appendChild(phoneVersion);

	var qty = document.createElement("td");
	qty.style.backgroundColor = "#99ccff";
	qty.style.width	= "75px";
	qty.appendChild(document.createTextNode(item.Qty));

	newRow.appendChild(qty);

	var sku = document.createElement("td");
	sku.style.backgroundColor = "#FFD699";
	sku.style.width = "75px";
	sku.appendChild(document.createTextNode(item.SKU));

	newRow.appendChild(sku);

	var phoneColor = document.createElement("td");
	phoneColor.style.backgroundColor = "#adebad";
	phoneColor.style.width = "100px";
	phoneColor.appendChild(document.createTextNode(item.Color));

	newRow.appendChild(phoneColor);
}