// given operation as string '+', '-' ..., and two numbers ('/', 12, 3)

// return answer of operation ('/', 12, 3) => 4

function basicOp(operation, value1, value2) {
    return eval(`${value1} ${operation} ${value2}`)
}