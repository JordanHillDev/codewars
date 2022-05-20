
// Digits explosion

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"
// explode("102269")
// should return :

// "12222666666999999999"

//P: string of digits 0 - 9
//R: string of digits where each digit is repeated number of times it represents


function explode(s) {
    return s.split('').reduce((acc, curr) => {
        let temp = ''
        for(let i = 0; i < +curr; i++) {
            temp += curr
        }
        return acc += temp;
    },'')
  }


//E:
explode('123') //=> '122333'
explode('914') //=> '99999999914444'