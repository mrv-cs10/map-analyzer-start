// MAP ANALYZER (ZELDA)   12 cols 8 rows
'use strict'; // Use strict mode

// Global Variables
let mapData;
fetch('maps.json')
  .then((res) => res.json())
  .then((data) => {
    mapData = data;
    initMap();
  });

// Add Event Listeners
// $("#tiles div").on("mouseenter", enterTile);
// $("#tiles div").on("mouseleave", exitTile);
// $("#levelTabs div").on("click", setLevel);

// Event Functions
function enterTile() {
  // Get row and col from tileID - "eg. c1-2"
  let tileId = $(this).attr('id');
  tileId = tileId.slice(1); // remove c
  tileId = tileId.split('-'); // split into array
  row = +tileId[0];
  column = +tileId[1];

  // Add border to show which tile the mouse is on and display row & column
  $(this).css('border', '1px solid red');
  $('#row').html(row);
  $('#col').html(column);

  // Call student function to test tile
  testTiles();
}

function exitTile() {
  // Set border back to black
  $(this).css('border', '1px solid black');
}

function setLevel() {
  // Clear all tabs
  $('#levelTabs div').removeClass().addClass('inactive');

  // Update level
  level = $(this).html(); // Set level variable
  $(this).removeClass('inactive').addClass('active'); // Update current tab

  // Draw New Map
  drawMap();
}

// Helper Functions
function initMap() {
  let containerEl = document.getElementById('container');

  // First Row (Column Numbers)
  containerEl.appendChild(document.createElement('div')); // Empty Top Left Corner
  for (let col = 0; col < 12; col++) {
    let divEl = document.createElement('div');
    divEl.innerHTML = col;
    containerEl.appendChild(divEl);
  }

  // Remaining Rows (Row Number and Tiles)
  for (let row = 0; row < 8; row++) {}

  // Add Tile Divs using Map Data Array (8 rows x 12 cols)
  let tileId;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      tileId = 'c' + row + '-' + col;
      $('#tiles').append(
        "<div id='" +
          tileId +
          "' class='" +
          mapData['Level 1'][row][col] +
          "' ondragstart='return false;' ondrop='return false;'></div>"
      );
    }
  }

  // Draw Level 1 Map
  drawMap('level1');
}

function drawMap() {
  let map = mapData[level];
  let tileId;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      tileId = '#c' + row + '-' + col;
      $(tileId).removeClass();
      $(tileId).addClass(map[row][col]);
    }
  }
}

function testTiles() {
  if (level === 'Level 1') {
    level1Solution();
  } else if (level === 'Level 2') {
    level2Solution();
  } else if (level === 'Level 3') {
    level3Solution();
  } else if (level === 'Level 4') {
    level4Solution();
  } else if (level === 'Level 5') {
    level5Solution();
  } else if (level === 'Level 6') {
    level6Solution();
  } else if (level === 'Level 7') {
    level7Solution();
  } else if (level === 'Level 8') {
    level8Solution();
  } else if (level === 'Level 9') {
    level9Solution();
  } else if (level === 'Level 10') {
    level10Solution();
  } else if (level === 'Level 11') {
    level11Solution();
  } else if (level === 'Level 12') {
    level12Solution();
  } else if (level === 'Level 13') {
    level13Solution();
  } else if (level == 'Level 14') {
    level14Solution();
  }
}
