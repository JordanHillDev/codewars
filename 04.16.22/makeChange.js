// You Got Change?

// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

// giveChange(365) // =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.

// giveChange(217) // => [2,1,1,0,0,2]

function giveChange(amount) {
    let bills = [0, 0, 0, 0, 0, 0];
    let remainingAmount = amount;

    if (remainingAmount >= 100) {
        bills[5] = Math.floor(remainingAmount / 100);
        remainingAmount -= bills[5] * 100;
    }
    if (remainingAmount >= 50) {
        bills[4] = Math.floor(remainingAmount / 50);
        remainingAmount -= bills[4] * 50;
    }
    if (remainingAmount >= 20) {
        bills[3] = Math.floor(remainingAmount / 20);
        remainingAmount -= bills[3] * 20;
    }
    if (remainingAmount >= 10) {
        bills[2] = Math.floor(remainingAmount / 10);
        remainingAmount -= bills[2] * 10;
    }
    if (remainingAmount >= 5) {
        bills[1] = Math.floor(remainingAmount / 5);
        remainingAmount -= bills[1] * 5;
    }
    if (remainingAmount >= 1) {
        bills[0] = Math.floor(remainingAmount / 1);
        remainingAmount -= bills[0] * 1;
    }
    return bills;
}
