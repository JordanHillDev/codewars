// Battleship field validator

// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

//must be 1 battleship: 4 cells
//        2 cruisers:   3 cells
//        3 destroyers: 2 cells
//        4 submarines: 1 cell

function validateBattlefield(field) {
    //get coordinates of all ships
    allShipsCoor = [];
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 1) allShipsCoor.push([j, i]);
        }
    }

    //get map of all ships

    //ships that match X Coordinates
    const shipsX = allShipsCoor.reduce((acc, curr) => {
        return (
            acc[curr[0]] ? acc[curr[0]].push(curr) : (acc[curr[0]] = [curr]),
            acc
        );
    }, {});
    //ships that match Y Coordinates
    const shipsY = allShipsCoor.reduce((acc, curr) => {
        return (
            acc[curr[1]] ? acc[curr[1]].push(curr) : (acc[curr[1]] = [curr]),
            acc
        );
    }, {});

    for (key in shipsX) {
        shipsX[key] = shipsX[key].filter((item, i, arr) => {
            console.log(item)
       
            // if (arr.length === 1) return true;
            if (
                arr.includes(item)
            ) {
                return true;
            } else {
                return false;
            }
        });
    }

}

validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);


//solution that works but I don't understand yet

function validateBattlefield(field) {
    var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
    for (var ships = [10,0,0,0,0], row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        if ( hit(row,col) ) {
          if ( hit(row-1, col-1) || hit(row-1, col+1) ) return false; // Corner is touching
          if ( hit(row-1, col  ) && hit(row  , col-1) ) return false; // Side is touching
          if ( ( field[row][col] += hit(row-1, col) + hit(row, col-1) ) > 4 ) return false; // Ship is too long
          ships[field[row][col]]++; ships[field[row][col] - 1]--;
    } } }
    return [0,4,3,2,1].every((s,i) => s == ships[i]);
  }