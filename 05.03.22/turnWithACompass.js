// Turn with a Compass
// You have an 8-wind compass, like this:

// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// Examples
// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"

function direction(facing, turn) {
    const clockwiseDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const countClockwiseDirections = clockwiseDirections.slice().reverse();
    const turnAmount = Math.abs(turn) / 45;

    if (turn >= 0) {
        return clockwiseDirections[
            (clockwiseDirections.indexOf(facing) + turnAmount) %
                clockwiseDirections.length
        ];
    }
    if (turn < 0) {
        console.log("counter-clockwise");
        return countClockwiseDirections[
            (countClockwiseDirections.indexOf(facing) + turnAmount) %
                countClockwiseDirections.length
        ];
    }
}
