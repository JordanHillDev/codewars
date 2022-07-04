// The Hashtag Generator

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    const hashtag = str.split(" ").reduce((acc, curr, i) => {
        if (!curr) return acc;
        return i === 0
            ? (acc += `#${curr.slice(0, 1).toUpperCase()}${curr.slice(1)}`)
            : acc +=`${curr.slice(0, 1).toUpperCase()}${curr.slice(1)}`;
    }, '');

    if(hashtag.length === 0 || hashtag.length > 140) return false
    return hashtag
}
