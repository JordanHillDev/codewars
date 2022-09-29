// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
    return str
        .split(/(?=[A-Z])/)
        .reduce((acc, curr, i) => {
            curr = curr.split(/\d/).filter(char=> char.length > 0).join('').toLowerCase()
            if(curr.length > 0) return acc += acc.length > 0 ? '-' + curr : curr 
            return acc
        }, '')
}


