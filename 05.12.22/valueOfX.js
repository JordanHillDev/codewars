// Value of x

// Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.

// So help him by making a equation solving function that will return the value of x.

// Test Cases will be like this:

// # INPUT            # RETURN
// 'x + 1 = 9 - 2'    # 6
// '- 10 = x'         # -10
// 'x - 2 + 3 = 2'    # 1
// '- x = - 1'        # 1
// All test cases are valid.
// Every +, - and numbers will be separated by space.
// There will be only one x either on the left or right.
// x can have a - mark before it.
// returned object will be a integer.

function valueOfX(eq) {
    const splitByEquals = eq.split("=");
    let leftSide = splitByEquals[0].split(" ").filter((item) => item !== " ");
    let rightSide = splitByEquals[1].split(" ").filter((item) => item !== " ");
    let xIsNegative = false;

    const reduceTheSide = (array) =>
        array
            .map((item, i, arr) => {
                if (arr.includes("x")) {
                    if (item === "x" && arr[i - 1] === "-") {
                        xIsNegative = true;
                    }
                    if (array[i - 1] === "-" && Number.isInteger(+item)) {
                        return +item;
                    } else if (Number.isInteger(+item)) {
                        return -item;
                    } else {
                        return null;
                    }
                } else {
                    if (array[i - 1] === "-" && Number.isInteger(+item)) {
                        return -item;
                    } else if (Number.isInteger(+item)) {
                        return +item;
                    } else {
                        return null;
                    }
                }
            })
            .reduce((acc, curr) => acc + curr, 0);

    return xIsNegative
        ? 0 - (reduceTheSide(leftSide) + reduceTheSide(rightSide))
        : reduceTheSide(leftSide) + reduceTheSide(rightSide);
}
