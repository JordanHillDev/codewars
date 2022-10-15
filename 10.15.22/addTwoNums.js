// Add Two Numbers

// given two non-empty linked lists that make two non-negative integers ...digits in reverse order and each node is 1 digit
// return two numbers added together but keep digits seperate and reversed in array

function addTwoNumbers(l1, l2) {
    //have obj of added nums
    //loop through and add i of l1 and l2 from left to right
    //if > 9 carry 1 over to next i
    let addedMap = {}

    function addToMap(arr) {
        for(let i = 0; i < arr.length; i++) {
            if(addedMap.hasOwnProperty(i)) {
                addedMap[i] += arr[i];
                if(addedMap[i] > 9) {
                    addedMap[i] = addedMap[i] % 10
                    addedMap[i + 1] ? addedMap[i + 1] += 1 : addedMap[i + 1] = 1
                }
            } else {
                addedMap[i] = arr[i]
            }
        }
    }

    addToMap(l1)
    addToMap(l2)
    return Object.values(addedMap)
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), '[7, 0, 8]')



//solution isn't complete. Need to read more about linked lists