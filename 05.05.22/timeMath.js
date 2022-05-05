// Time Math

// Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

// timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

// timeMath('01:24:31', '-', '02:31:41') === '22:52:50'

function timeMath(time1, op, time2) {
    const firstTime = time1.split(":");
    // const secondTime = time2.split(':')
    console.log(firstTime);
    let firstDate = new Date(2000, 0, 1, +time1[0], +time1[1], +time1[2]);
    console.log(firstDate);
}

// actual solution

function timeMath(time1, op, time2) {
    let seconds = (time) => time.split(":").reduce((a, b) => a * 60 + +b, 0);

    let res = op === "+" 
            ? seconds(time1) + seconds(time2)
            : seconds(time1) - seconds(time2);

    let date = new Date(res * 1000);

    return date.toTimeString().slice(0, 8);
}
