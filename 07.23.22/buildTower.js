
// Build Tower

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let floorCount = 1
    let starCount = 1
    let finalArea = (nFloors * 2) - 1
    let solution = []

    while(floorCount <= nFloors) {
        let tempStr = ''
        let spaces = (finalArea - starCount) / 2
        tempStr += ' '.repeat(spaces)
        tempStr += '*'.repeat(starCount)
        tempStr += ' '.repeat(spaces)
        solution.push(tempStr)
        floorCount++
        starCount += 2
    }

    return solution
  }

//solution with less lines
  function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }