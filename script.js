// MAP ANALYZER  12 cols 8 rows

// Global Variables
let level = "level1";
let mapData;
let mapEls = [];

// Load Map Data from JSON File
fetch("maps.json")
  .then((res) => res.json())
  .then((data) => {
    mapData = data;
    initMapHTML();
    drawMap("level1");
  });

// Helper Functions
function initMapHTML() {
  let containerEl = document.getElementById("container");

  // First Row (Column Numbers)
  containerEl.appendChild(document.createElement("div")); // Empty Top Left Corner
  for (let col = 0; col < 12; col++) {
    let divEl = document.createElement("div");
    divEl.innerHTML = col;
    containerEl.appendChild(divEl);
  }

  // Remaining Rows (Row Number and Tiles)
  for (let row = 0; row < 8; row++) {
    // Row Number
    let divEl = document.createElement("div");
    divEl.innerHTML = row;
    containerEl.appendChild(divEl);
    // Row Tiles
    let tempRowEls = [];
    for (let col = 0; col < 12; col++) {
      let divEl = document.createElement("div");
      divEl.dataset.row = row;
      divEl.dataset.col = col;
      divEl.className = "tile";
      divEl.addEventListener("mouseenter", mouseEnterHandler);
      divEl.addEventListener("mouseleave", mouseLeaveHandler);
      containerEl.appendChild(divEl);
      tempRowEls.push(divEl);
    }
    mapEls.push(tempRowEls);
  }
}

function drawMap(level) {
  let map = mapData[level];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      mapEls[row][col].className = `${map[row][col]} tile`;
    }
  }
}

// Event Listeners
function mouseEnterHandler(e) {
  e.target.classList.add("active");
  row = +e.target.dataset.row;
  column = +e.target.dataset.col;
  document.getElementById("row").innerHTML = row;
  document.getElementById("col").innerHTML = column;

  testTiles();
}

function mouseLeaveHandler(e) {
  e.target.classList.remove("active");
}

document.getElementById("level-select").addEventListener("input", levelSelect);

function levelSelect(e) {
  level = e.target.value;
  drawMap(level);
}

function testTiles() {
  if (level === "level1") {
    level1Solution();
  } else if (level === "level2") {
    level2Solution();
  } else if (level === "level3") {
    level3Solution();
  } else if (level === "level4") {
    level4Solution();
  } else if (level === "level5") {
    level5Solution();
  } else if (level === "level6") {
    level6Solution();
  } else if (level === "level7") {
    level7Solution();
  } else if (level === "level8") {
    level8Solution();
  } else if (level === "level9") {
    level9Solution();
  } else if (level === "level10") {
    level10Solution();
  } else if (level === "level11") {
    level11Solution();
  } else if (level === "level12") {
    level12Solution();
  } else if (level === "level13") {
    level13Solution();
  } else if (level == "level14") {
    level14Solution();
  }
}
