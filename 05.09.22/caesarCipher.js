// Dbftbs Djqifs

// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

// Your task
// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

// Examples
// A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

// A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.

function encryptor(key, message) {
    let lowerAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    if (Math.sign(key) < 0) {
        lowerAlpha = lowerAlpha.reverse();
        upperAlpha = upperAlpha.reverse();
        key = Math.abs(key);
    }

    return message
        .split("")
        .map((char) => {
            if (!lowerAlpha.includes(char) && !upperAlpha.includes(char)) {
                return char;
            }
            if (upperAlpha.includes(char)) {
                return upperAlpha[
                    (upperAlpha.indexOf(char) + key) % upperAlpha.length
                ];
            }
            if (lowerAlpha.includes(char)) {
                return lowerAlpha[
                    (lowerAlpha.indexOf(char) + key) % lowerAlpha.length
                ];
            }
        })
        .join("");
}
