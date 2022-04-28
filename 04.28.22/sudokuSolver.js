// Sudoku Solver
// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

// For Sudoku rules, see the Wikipedia article.

var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]]

let possMap = {};
let solvedPuzzle;

function sudoku(puzzle) {
    solvedPuzzle = puzzle;

    // fills out possible numbers for each spot in array
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            possMap[String(i) + String(j)] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            if (solvedPuzzle[i][j] !== 0) {
                possMap[String(i) + String(j)] = solvedPuzzle[i][j];
            }
        }
    }

    function reduceAmount() {
        // filters our numbers in each row
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (solvedPuzzle[i][j] === 0) {
                    possMap[String(i) + String(j)] = possMap[
                        String(i) + String(j)
                    ].filter((num) => !solvedPuzzle[i].includes(num));
                }
            }
        }

        // filters numbers in each column
        for (let i = 0; i < 9; i++) {
            let columnArr = [];
            for (let j = 0; j < 9; j++) {
                if (solvedPuzzle[j][i] !== 0) {
                    columnArr.push(solvedPuzzle[j][i]);
                }
            }

            for (let k = 0; k < 9; k++) {
                if (solvedPuzzle[k][i] === 0) {
                    possMap[String(k) + String(i)] = possMap[
                        String(k) + String(i)
                    ].filter((num) => !columnArr.includes(num));
                }
            }
        }

        for(let key in possMap) {
            if(possMap[key].length === 1) {
                console.log(possMap[key])
                solvedPuzzle[key.split('')[0]][key.split('')[1]] = +possMap[key].join()
            }
        }
    }


    reduceAmount()
    reduceAmount()
    reduceAmount()
    reduceAmount()
}
