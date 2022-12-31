// given h, m, and s as integers (h, m, s)

// return milliseconds since midnight

function past(h, m, s) {
    let midnight = new Date(0, 0, 0, 0, 0, 0)
    let current = new Date(0, 0, 0, h, m, s)

    return current - midnight
}

// alternate

function past(h, m, s) {
    return ((h*3600)+(m*60)+(s)*1000)
}