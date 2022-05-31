// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    const numOfZeros = arr.reduce((acc, curr) => (curr === 0 ? ++acc : acc), 0);

    while (arr.indexOf(0) !== arr.length - numOfZeros) {
        arr.splice(arr.indexOf(0), 1);
        arr.push(0);
    }

    return arr;
}

//much faster solution
function moveZeros(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
        console.log(arr);
    }

    while (count < arr.length) {
        arr[count++] = 0;
    }

    return arr;
}
