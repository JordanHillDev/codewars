// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet


// P: string that contains URL
// R: just domain name

function getDomain(url) {
    //replace http and https with empty string
    //split code by .'s
    //return index with length > 0

    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www', '')
    url = url.replace('com', '')
    let splitUrl = url.split('.')
    return splitUrl.filter(item => item.length > 0)[0]
}