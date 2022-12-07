// given string of jewels and string of stones
// uppercase and lowercase letters are different kinds of jewels
// return number of jewels that are in stones

function numOfJewels(jewels, stones) {
    let hash = {};

    for (ea of stones) {
        if (jewels.includes(ea)) {
            hash[ea] ? hash[ea]++ : (hash[ea] = 1);
        }
    }

    return Object.values(hash).reduce((acc, curr) => acc + curr, 0)
}
