let boolean = true
let points = 0
const letters = [["", " \t\n"]['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],['D', 'G'],['B', 'C', 'M', 'P'],['F', 'H', 'V', 'W', 'Y'],['K'],['J', 'X'],['Q', 'Z']]

function noInput (type) {
  type === null
    ? boolean = true
    : boolean = false
  return boolean
}

function parseWord (str) {
  const arr = []
  for (let i = 0; i < str.length; i++) {
    arr.push(str.charAt(i).toUpperCase())
  } return arr
}

function resetPoints () {
  points = 0
}

function scoreWord (arr) {
  resetPoints()
  for (let i = 0; i <= arr.length; i++) {
    scoreLetter(arr[i])
  }
  return points
}

function scoreLetter (element) {
for (let i=0;i<=7;i++){
  if (i===6){if(letters[i].includes(element))
                 {points += 8;}
    }
  if (i===7) {if(letters[i].includes(element)
                 {points += 10;}
    } else if (letters[i].includes(element))
                 {points += i;}
    }
  
class Scrabble {
  constructor (str) {
    this.str = str
  }

  // Write your implementation here
  score () {
    if (noInput(this.str) || nonsenseCheck(this.str)) {
      points = 0
    } else scoreWord(parseWord(this.str))
    return points
  }
}
module.exports = Scrabble
