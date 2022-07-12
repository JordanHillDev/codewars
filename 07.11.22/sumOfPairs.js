// Sum of pairs

// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

function sumPairs(ints, s) {
    const pair = ints.reduce((acc, curr, i, arr) => {
        if (arr.includes(s - curr, i + 1)) {
            if (acc.length === 0) {
                return (acc = [curr, arr[arr.indexOf(s - curr)]]);
            }
            if (
                arr.indexOf(s - curr, i + 1) < arr.indexOf(acc[1], i + 1) &&
                arr.indexOf(s - curr, i + 1) > arr.indexOf(curr)
            ) {
                return (acc = [curr, arr[arr.indexOf(s - curr)]]);
            }
        }
        return acc;
    }, []);
    if (pair.length === 0) return undefined;
    return pair;
}

//simpler, faster version but still timed out
function sumPairs(ints, s) {
    let pair;
    for (let i = 0; i < ints.length; i++) {
        let neededNum = s - ints[i];
        if (ints.includes(neededNum, i + 1)) {
            pair = [ints[i], ints[ints.indexOf(neededNum, i + 1)]];
            ints.splice(ints.indexOf(neededNum, i + 1));
        }
    }

    return pair;
}

//version fast enough to not time out
var sum_pairs = function (ints, s) {
    var seen = {};
    for (var i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
        seen[ints[i]] = true;
    }
};
