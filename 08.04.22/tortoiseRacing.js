// Tortoise racing

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

//P: A speed in ft/h, B speed in ft/h, A's head start distance in feet
//R: array [hours, minutes, seconds] for B to catch A

function race(v1, v2, g) {
    if (v1 >= v2) return null; //return empty if A is faster
    const v1PerSecond = v1 / 60 / 60;
    const v2PerSecond = v2 / 60 / 60;
    let v1Distance = g; //head start included
    let v2Distance = 0;
    let seconds = 0;

    while (v2Distance <= v1Distance) {
        v1Distance += v1PerSecond;
        v2Distance += v2PerSecond;
        seconds++;
    }

    const time = [];

    time[0] = seconds >= 3600 ? Math.floor(seconds / 3600) : 0
    if(time[0] > 0)seconds = seconds % (time[0] * 3600)
    time[1] = seconds > 60 ? Math.floor(seconds / 60) : 0;
    if(time[1] > 0) seconds = seconds % (time[1] * 60);
    time[2] = seconds 

    return time;
}

race(720, 850, 70); //=> [0, 32, 18]


//solution that works and is much shorter
function race(v1, v2, g){
    let time=g/(v2-v1);
    return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
  }