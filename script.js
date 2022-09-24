// MAP ANALYZER (ZELDA)   12 cols 8 rows
"use strict"; // Use strict mode

// Global Variables
let mapData;
let level = "Level 1";

// Init Map
initMap();

// Add Event Listeners
$("#tiles div").on("mouseenter", enterTile);
$("#tiles div").on("mouseleave", exitTile);
$("#levelTabs div").on("click", setLevel);

// Event Functions
function enterTile() {
	// Get row and col from tileID - "eg. c1-2"
	let tileId = $(this).attr("id");
	tileId = tileId.slice(1); // remove c
	tileId = tileId.split("-"); // split into array
	row = +tileId[0];
	column = +tileId[1];

	// Add border to show which tile the mouse is on and display row & column
	$(this).css("border", "1px solid red");
	$("#row").html(row);
	$("#col").html(column);

	// Call student function to test tile
	testTiles();
}

function exitTile() {
	// Set border back to black
	$(this).css("border", "1px solid black");
}

function setLevel() {
	// Clear all tabs
	$("#levelTabs div").removeClass().addClass("inactive");

	// Update level
	level = $(this).html(); // Set level variable
	$(this).removeClass("inactive").addClass("active"); // Update current tab

	// Draw New Map
	drawMap();
}

// Helper Functions
function initMap() {
	// Init Map Data
	initMapData();

	// Add Row Numbers
	for (let rowNum = 0; rowNum < 8; rowNum++) {
		$("#rowNums").append("<div>" + rowNum + "</div>");
	}

	// Add Col Numbers
	for (let colNum = 0; colNum < 12; colNum++) {
		$("#colNums").append("<div>" + colNum + "</div>");
	}

	// Add Tile Divs using Map Data Array (8 rows x 12 cols)
	let tileId;
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 12; col++) {
			tileId = "c" + row + "-" + col;
			$("#tiles").append("<div id='" + tileId + "' class='" + mapData["Level 1"][row][col] + "' ondragstart='return false;' ondrop='return false;'></div>");
		}
	}

	// Add Page Tabs
	for (let numLevel = 1; numLevel <= 14; numLevel++) {
		$("#levelTabs").append("<div class='inactive'>Level " + numLevel + "</div>");
	}
	$("#levelTabs div:first-child").removeClass("inactive").addClass("active"); // Select Level 1 to start
}

function initMapData() {
	mapData = {};

	// Level 1: Horizontal Binary - Two Bars
	mapData["Level 1"] = [["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water", "water"]];

	// Level 2: Horizontal Chained - Three Bars
	mapData["Level 2"] = [["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water"]];

	// Level 3: Horizontal Binary - Three Bars
	mapData["Level 3"] = [["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "ground", "ground", "ground", "ground", "ground", "trees", "trees", "trees", "trees"]];

	// Level 4: Vertical Binary - Two Bars
	mapData["Level 4"] = [["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]];

	// Level 5: Vertical Chained - Three Bars
	mapData["Level 5"] = [["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"], ["trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees", "trees"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"]];

	// Level 6: Vertical Binary - Three Bars
	mapData["Level 6"] = [["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"], ["water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water", "water"]];

	// Level 7: Binary - Single Tile
	mapData["Level 7"] = [["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","water","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground"]];

	// Level 8: Binary - Single Row & Column Intersect
	mapData["Level 8"] = [["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["bush","bush","bush","bush","bush","bush","bush","bush","bush","bush","bush","bush"],["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"],["ground","ground","bush","ground","ground","ground","ground","ground","ground","ground","ground","ground"]];

	// Level 9: Binary - Corner Box & Remaining Area
	mapData["Level 9"] = [["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]];

	// Level 10: Vertical Chained - Four Bars
	mapData["Level 10"] = [["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"], ["trees", "trees", "bush", "bush", "ground", "ground", "ground", "ground", "water", "water", "water", "water"]];

	// Level 11: Chained - Four Boxes
	mapData["Level 11"] = [["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"], ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"], ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"], ["water", "water", "water", "water", "water", "water", "trees", "trees", "trees", "trees", "trees", "trees"], ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"], ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"], ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"], ["ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush", "bush", "bush", "bush", "bush"]];

	// Level 12: Binary - Four Boxes
	mapData["Level 12"] = [["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["water", "water", "water", "water", "water", "water", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water"], ["ground", "ground", "ground", "ground", "ground", "ground", "water", "water", "water", "water", "water", "water"]];

	// Level 13: Binary - Center Box & Remaining Area
	mapData["Level 13"] = [["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"], ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"], ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"], ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"], ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"], ["bush", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "bush", "bush"], ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"], ["bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush", "bush"]];

	// Level 14: Chained - Two Boxes & Remaining Area
	mapData["Level 14"] = [["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "water", "water", "water", "water", "ground"], ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "water", "water", "water", "water", "ground"], ["ground", "ground", "bush", "bush", "bush", "ground", "ground", "water", "water", "water", "water", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"], ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"]];
}

function drawMap() {
	let map = mapData[level];
	let tileId;
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 12; col++) {
			tileId = "#c" + row + "-" + col;
			$(tileId).removeClass();
			$(tileId).addClass(map[row][col]);
		}
	}
}

function testTiles() {
	if (level === "Level 1") {
		level1Solution();
	} else if (level === "Level 2") {
		level2Solution();
	} else if (level === "Level 3") {
		level3Solution();
	} else if (level === "Level 4") {
		level4Solution();
	} else if (level === "Level 5") {
		level5Solution();
	} else if (level === "Level 6") {
		level6Solution();
	} else if (level === "Level 7") {
		level7Solution();
	} else if (level === "Level 8") {
		level8Solution();
	} else if (level === "Level 9") {
		level9Solution();
	} else if (level === "Level 10") {
		level10Solution();
	} else if (level === "Level 11") {
		level11Solution();
	} else if (level === "Level 12") {
		level12Solution();
	} else if (level === "Level 13") {
		level13Solution();
	} else if (level == "Level 14") {
		level14Solution();
	}
}
