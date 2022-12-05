// given string
//return object showing number of times each char occurs

function occurrences(str) {
    let map = {};

    for (ea of str) {
        map[ea] ? map[ea]++ : (map[ea] = 1);
    }

    return map;
}
