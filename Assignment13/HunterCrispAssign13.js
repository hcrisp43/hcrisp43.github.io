var userInterface = ["#dragButton1", "#dropSection", "#resizeButton1", 
"#selectSection", "#sortSection", "#dateSection", "#dialogSection",
"#menuSection", "#selectMenuSection", "#sliderSelection"];

function chooseOption(val)
{
	for(var i = 0; i < userInterface.length; i++)
	{
		$(userInterface[i]).hide();
	}


	switch(val)
	{
		case "drag":
		$('#dragButton1').show();
		$('#dragButton1').draggable();
		break;

		case "drop":
		$('#dropSection').show();
		$('#dragButton2').draggable();
		$('#dropArea').droppable({
      		drop: function(event, ui) {
        	$(this).addClass("dropArea2").find("p").html("Dropped!");
      		}
    	});
		break;

		case "resize":
		$('#resizeButton1').show();
		$('#resizeButton1').resizable();
		break;

		case "select":
		$('#selectSection').show();
		$('#selectableList').selectable();
		break;

		case "sort":
		$('#sortSection').show();
		$('#sortableList').sortable();
		break;

		case "date":
		$('#dateSection').show();
		$('#datePicker').datepicker();
		break;

		case "dialog":
		$('#dialogSection').show();
		$('#dialogDiv').dialog();
		break;

		case "menu":
		$('#menuSection').show();
		$('#menuList').menu();
		break;

		case "selectmenu":
		$('#selectMenuSection').show();
		$('#selectMenu').selectmenu();
		break;

		case "slider":
		$('#sliderSection').show();
		$('#slider').slider();
		break;
	}
}