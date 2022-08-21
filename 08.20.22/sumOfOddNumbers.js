// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	const triangleArr = []
    let lastNum = 1
    for(let i = 1; i <= n; i++) {
        let tempArr = []
        while(tempArr.length < i) {
            tempArr.push(lastNum)
            lastNum += 2
        }
        triangleArr.push(tempArr)
    }

    return triangleArr[n - 1].reduce((acc, curr) => acc += curr, 0)
}