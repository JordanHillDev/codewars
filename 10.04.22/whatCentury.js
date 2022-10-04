// What century is it?

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
    const centuryNum = Math.ceil(year / 100).toString();
    let ordinal = "";

    if (+centuryNum > 10 && +centuryNum < 14) {
        ordinal = 'th'
    } else {
        switch (centuryNum[1]) {
            case "0":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                ordinal = "th";
                break;
            case "1":
                ordinal = "st";
                break;
            case "2":
                ordinal = "nd";
                break;
            case "3":
                ordinal = "rd";
                break;
        }
    }

    return `${centuryNum}${ordinal}`;
}
