// given name as string

// return name + 'plays banjo' if name begins with R or r || name + 'does not play banjo' if not

function areYouPlayingBanjo(name) {
    if (name[0].toUpperCase() === "R") return name + " plays banjo";
    return name + " does not play banjo";
}
