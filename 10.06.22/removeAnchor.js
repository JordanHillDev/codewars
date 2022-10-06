// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//P: string URL
//R: string with everything at a # and after to be removed

function removeUrlAnchor(url) {
    if (url.includes("#")) return url.slice(0, url.indexOf("#"));
    else return url;
}

//E:
removeUrlAnchor("www.test.com/#test"); // => 'www.test.com/'
