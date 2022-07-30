// Text align justify

// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Gap between words can't differ by more than one space.
// Lines should end with a word not a space.
// '\n' is not included in the length of a line.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Last line should not contain '\n'
// Strings with one word do not need gaps ('somelongword\n').
// Example with width=30:

// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.
// Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

// Have fun :)

//P: string, number that is line length
//R: string including spaces and \n

function justify(text, width) {
    text = text.split(" ");
    let finalText = [];
    let wordIndex = 0;
    let iterator = 0;
    let currLine = [];
    let currLineIndex = 0

    while (wordIndex <= text.length - 1 && iterator < 20) {
        if (currLine.length > 0) {
            finalText.push(currLine);
        }
        currLine = [];
        currLineIndex = 0
        let iter = 0;


        while (getLineLength(currLine) < width && iter < 30 && wordIndex <= text.length - 1) {
            
            console.log(`final:${finalText}, index:${wordIndex}, curr:${currLine}`)
            if (getLineLength(currLine) + text[wordIndex].length <= width) {
                currLine.push(text[wordIndex]);
                if (getLineLength(currLine) < width) {
                    currLine[currLineIndex] = currLine[currLineIndex].concat(" ");
                }
                ++wordIndex
                ++currLineIndex;
            } else {
                for(let i = 0; i < currLine.length; i++) {
                    currLine[i] = currLine[i].concat(' ')
                    if(getLineLength(currLine) >= width) i = currLine.length
                }
            }
            console.log(currLine)
            ++iter;
        }

        ++iterator;
    }

    console.log(finalText)

    function getLineLength(arr) {
        return arr.reduce((acc, curr) => (acc += curr.length), 0);
    }
}

justify("123 45 6", 7); //=> '123  45\n6'
justify("123", 7); //=> '123'


//solution I don't understand yet

function justify(str, len) {
    var words = str.split(' ');
    var lines = [];
    var lastLine = words.reduce(function(line, word) {
      if (line) {
        if (line.length + word.length + 1 <= len)
          return line + ' ' + word;
        lines.push(line);
      }
      return word;
    });
    lines = lines.map(function(line) {
      if (line.indexOf(' ') >= 0)
        for (var lineLen = line.length; lineLen < len; )
          line = line.replace(/ +/g, function(spaces) {
            return spaces + (lineLen++ < len ? ' ' : '');
          });
      return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
  }