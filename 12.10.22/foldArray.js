// given an array and the number of times to fold it (arr, runs)
// fold array in middle number of runs and add the folds together
// return array of nums

function foldArray(array, runs) {
    let arrCopy = [...array];

    let count = 0;

    while (count < runs) {
        let middle = Math.floor(arrCopy.length / 2);

        for (let i = 0; i < middle; i++) {
            arrCopy[i] += arrCopy.pop();
        }

        count++;
    }

    return arrCopy;
}

console.log(foldArray([1, 2, 3, 4, 5], 2), "[9, 6]");
console.log(foldArray([1, 2, 3, 4, 5, 6], 3), "[14, 7]");
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1), "[14, 75, 0]");
