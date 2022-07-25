// CamelCase Method

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)


String.prototype.camelCase=function(){
    return this.split(' ').reduce((acc, curr) => {
        if(curr === '') return acc;
        return acc += curr[0].toUpperCase() + curr.slice(1)
    }, '')
  }

  