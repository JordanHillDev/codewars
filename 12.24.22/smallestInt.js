// given array of integers

// return smallest int

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((acc, curr) => curr < acc ? curr : acc)
  }
}

// using Math.min
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}