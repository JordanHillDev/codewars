// given array of numbers
// return true if any value is appears at least twice or false of every element is distinct

function containsDuplicates(arr) {
    const hash = {}

    for(let i = 0; i < arr.length; i++) {
        let num = arr[i]

        if(hash[num]) return true
        else {
            hash[num] = true
        }
    }

    return false
}

console.log(containsDuplicates([2, 3, 4, 2]), true)
console.log(containsDuplicates([2, 3, 4, 5]), false)