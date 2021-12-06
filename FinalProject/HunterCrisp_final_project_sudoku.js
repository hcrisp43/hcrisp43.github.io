/*
Hunter Crisp
5 December 2021
INF 651 Final Project
*/


//Load board
const easy = [ "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
"685329174971485326234761859362574981549618732718293465823946517197852643456137298" ];

const medium = [ "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--", 
"619472583243985617587316924158247369926531478734698152891754236365829741472163895" ];

const hard = [ "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--", 
"712583694639714258845269173521436987367928415498175326184697532253841769976352841" ];

var timer;
var timeRemain;
var lives;
var selectedNum;
var selectedTile;
var disableSelect;

window.onload = function () {
	$("#startButton").click(startGame);

	for(var i = 0; i < document.getElementById("numberContainer").children.length; i++)
	{
		document.getElementById("numberContainer").children[i].addEventListener("click", function() {
			if(!disableSelect)
			{
				if(this.classList.contains("selected"))
				{
					this.classList.remove("selected");
					selectedNum = null;
				}
				else
				{
					for(var j = 0; j < 9; j++)
					{
						document.getElementById("numberContainer").children[j].classList.remove("selected");
					}

					this.classList.add("selected");
					selectedNum = this;
					updateMove();
				}
			}
		});
	}

}

function startGame() {
	var board;

	if(document.getElementById("easyDiff").checked)
	{
		board = easy[0];
	}
	else if(document.getElementById("medDiff").checked)
	{
		board = medium[0];
	}
	else
	{
		board = hard[0];
	}

	lives = 3;
	disableSelect = false;

	$("#lives").text("Lives Remaining: 3");

	generateBoard(board);

	startTimer();

	if(document.getElementById("lightRadio").checked)
	{
		$("body").removeClass("dark");
	}
	else
	{
		$("body").addClass("dark");
	}

	$("#numberContainer").removeClass("hidden");
}

function startTimer() {
	if(document.getElementById("threeMin").checked)
	{
		timeRemain = 180;
	}
	else if(document.getElementById("fiveMin").checked)
	{
		timeRemain = 300;
	}
	else
	{
		timeRemain = 600;
	}

	$("#timer").text(timeConversion(timeRemain));

	timer = setInterval(function() {
		timeRemain--;

		if(timeRemain == 0)
		{
			endGame();
		}

		$("#timer").text(timeConversion(timeRemain));
	}, 1000);
}

function timeConversion(time)
{
	var minutes = Math.floor(time / 60);
	if(minutes < 10)
	{
		minutes = "0" + minutes;
	}

	var seconds = time % 60;
	if(seconds < 10)
	{
		seconds = "0" + seconds;
	}

	return minutes + ":" + seconds;
}

function generateBoard(board) {
	clearPrevious();

	var idCount = 0; 

	for(var i = 0; i < 81; i++)
	{
		let tile = document.createElement("p");

		if(board.charAt(i) != "-")
		{
			tile.textContent = board.charAt(i);
		}
		else
		{
			tile.addEventListener("click", function() {
				if(!disableSelect)
				{
					if(tile.classList.contains("selected"))
					{
						tile.classList.remove("selected");
						selectedTile = null;
					}
					else
					{
						for(var j = 0; j < 81; j++)
						{
							document.querySelectorAll(".tile")[j].classList.remove("selected");
						}

						tile.classList.add("selected");
						selectedTile = tile;
						updateMove();
					}
				}
			});
		}

		tile.id = idCount;
		idCount++;
		tile.classList.add("tile");

		if((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54))
		{
			tile.classList.add("bottomBorder");
		}

		if((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
			tile.classList.add("rightBorder");
		}

		$("#board").append(tile);
	}
}

function updateMove() {
	if(selectedTile && selectedNum)
	{
		selectedTile.textContent = selectedNum.textContent;

		if(checkCorrect(selectedTile))
		{
			selectedTile.classList.remove("selected");
			selectedNum.classList.remove("selected");

			selectedTile = null;
			selectedNum = null;

			if(checkDone())
			{
				endGame();
			}
		}
		else
		{
			disableSelect = true;
			selectedTile.classList.add("incorrect");
			setTimeout(function() {
				lives--;
				if(lives == 0)
				{
					endGame();
				}
				else
				{
					$("#lives").text("Lives Remaining: " + lives);
					disableSelect = false;
				}

				selectedTile.classList.remove("incorrect");
				selectedTile.classList.remove("selected");
				selectedNum.classList.remove("selected");
				selectedTile.textContent = "";
				selectedTile = null;
				selectedNum = null;
			}, 1000);
		}
	}
}

function checkDone() {
	let tiles = document.querySelectorAll(".tile");
	for(var i = 0; i < tiles.length; i++)
	{
		if(tiles[i].textContent == "")
		{
			return false;
		}
	}
	return true;
}

function checkCorrect(tile){
	let solution;
	if(document.getElementById("easyDiff").checked)
	{
		solution = easy[1];
	}
	else if(document.getElementById("medDiff").checked)
	{
		solution = medium[1];
	}
	else
	{
		solution = hard[1];
	}

	if(solution.charAt(tile.id) == tile.textContent)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function clearPrevious() {
	let tiles = $(".tile");

	for(var i = 0; i < tiles.length; i++)
	{
		tiles[i].remove();
	}

	if(timer)
	{
		clearTimeout(timer);
	}

	for(var i = 0; i < $("#numberContainer").children.length; i++)
	{
		document.getElementById("numberContainer").children[i].classList.remove("selected");
	}

	selectedTile = null;
	selectedNum = null;
}

function endGame() {
	disableSelect = false;
	clearTimeout(timer);
	if(lives == 0 || timeRemain == 0)
	{
		$("#lives").text("You Lost");
	}
	else
	{
		$("#lives").text("You Won");
	}
}