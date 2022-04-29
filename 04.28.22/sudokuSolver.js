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

function sudoku(puzzle) {
    let solvedPuzzle = puzzle;
    let possMap = {};

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
        // filter numbers in each box
        let box1 = [];
        let box2 = [];
        let box3 = [];
        let box4 = [];
        let box5 = [];
        let box6 = [];
        let box7 = [];
        let box8 = [];
        let box9 = [];

        solvedPuzzle.forEach((row, i) => {
            row.forEach((column, j) => {
                if (solvedPuzzle[i][j] !== 0) {
                    if (i < 3) {
                        if (j < 3) {
                            box1.push(solvedPuzzle[i][j]);
                        } else if (j < 6) {
                            box2.push(solvedPuzzle[i][j]);
                        } else if (j < 9) {
                            box3.push(solvedPuzzle[i][j]);
                        }
                    } else if (i < 6) {
                        if (j < 3) {
                            box4.push(solvedPuzzle[i][j]);
                        } else if (j < 6) {
                            box5.push(solvedPuzzle[i][j]);
                        } else if (j < 9) {
                            box6.push(solvedPuzzle[i][j]);
                        }
                    } else if (i < 9) {
                        if (j < 3) {
                            box7.push(solvedPuzzle[i][j]);
                        } else if (j < 6) {
                            box8.push(solvedPuzzle[i][j]);
                        } else if (j < 9) {
                            box9.push(solvedPuzzle[i][j]);
                        }
                    }
                }
            });
        });

        for (let key in possMap) {
            let whichBox;

            switch (key) {
                case "00":
                case "01":
                case "02":
                case "10":
                case "11":
                case "12":
                case "20":
                case "21":
                case "22":
                    whichBox = box1;
                    break;
                case "03":
                case "04":
                case "05":
                case "13":
                case "14":
                case "15":
                case "23":
                case "24":
                case "25":
                    whichBox = box2;
                    break;
                case "06":
                case "07":
                case "08":
                case "16":
                case "17":
                case "18":
                case "26":
                case "27":
                case "28":
                    whichBox = box3;
                    break;
                case "30":
                case "31":
                case "32":
                case "40":
                case "41":
                case "42":
                case "50":
                case "51":
                case "52":
                    whichBox = box4;
                    break;
                case "33":
                case "34":
                case "35":
                case "43":
                case "44":
                case "45":
                case "53":
                case "54":
                case "55":
                    whichBox = box5;
                    break;
                case "36":
                case "37":
                case "38":
                case "46":
                case "47":
                case "48":
                case "56":
                case "57":
                case "58":
                    whichBox = box6;
                    break;
                case "60":
                case "61":
                case "62":
                case "70":
                case "71":
                case "72":
                case "80":
                case "81":
                case "82":
                    whichBox = box7;
                    break;
                case "63":
                case "64":
                case "65":
                case "73":
                case "74":
                case "75":
                case "83":
                case "84":
                case "85":
                    whichBox = box8;
                    break;
                case "66":
                case "67":
                case "68":
                case "76":
                case "77":
                case "78":
                case "86":
                case "87":
                case "88":
                    whichBox = box9;
                    break;
            }

            if (possMap[key].length > 1) {
                possMap[key] = possMap[key].filter(
                    (item) => !whichBox.includes(item)
                );
            }
        }

        for (let key in possMap) {
            if (possMap[key].length === 1) {
                solvedPuzzle[key.split("")[0]][key.split("")[1]] =
                    +possMap[key].join();
            }
        }
    }

    for (let keys in possMap) {
        if (possMap[keys].length > 1) {
            reduceAmount();
        }
    }

    return solvedPuzzle;
}
