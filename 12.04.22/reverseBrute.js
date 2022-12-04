// given strings
// return string in reverse order without using reverse method

function reverse(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverse("potato"), "otatop");
