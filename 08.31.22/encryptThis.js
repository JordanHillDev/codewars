// Encrypt this!

// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

//P string containing space-seperated word
//R string with 1st letter converted to ASCII code and second and last letter switched

const encryptThis = function (text) {
    text = text.split(" "); //split words into array

    return text.map((word) => {
        const firstCharCode = word.charCodeAt(0);
        const secondLetter = word.charAt(1);
        const lastLetter = word.charAt(word.length - 1);

        return word
            .split("")
            .map((char, i) => {
                if (i === 0) return firstCharCode;
                if (i === 1) return lastLetter;
                if (i === word.length - 1) return secondLetter;
                return char;
            })
            .join("");
    }).join(' ');
};

// Examples:
encryptThis("Hello") //==> "72olle";
encryptThis("good") //==> "103doo";
encryptThis("hello world") //==> "104olle 119drlo";
