// given three integers (#, #, #)

// return valid 2 digit hexadecimal as string '######'

// if integer is < 0 or > 255 round to nearest

function rgb(r, g, b) {
    const convert = (n) => {
        if (n < 0) n = 0;
        if (n > 255) n = 255;

        return (
            n.toString(16).length > 1 ? n.toString(16) : "0" + n.toString(16)
        ).toUpperCase();
    };

    return `${convert(r)}${convert(g)}${convert(b)}`;
}
