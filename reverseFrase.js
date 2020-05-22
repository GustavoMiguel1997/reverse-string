function codeString(frase, method = 'reverse'){
  let alphabet = []
  
  function generateAlphabet(){
    let fromLetter = 'a';
    for(let i = 1; i <= 26; i++){
      alphabet.push(fromLetter)
      fromLetter = String.fromCharCode(fromLetter.charCodeAt(fromLetter.length - 1) + 1)
    }
  }

  function codeWord(word){
    let reversedAlphabet = [...alphabet].reverse()
    if(method === 'unreverse'){
      const reversedAlphabetAux = reversedAlphabet;
      reversedAlphabet = alphabet;
      alphabet = reversedAlphabetAux;
    }
    const wordArray = word.split('')
    const newWord = wordArray.map(letter => { 
      const index = reversedAlphabet.findIndex(reverted => reverted === letter.toLowerCase())
      return alphabet[index]
    })
    return newWord.join('')
  }

  function codeFrase(){
    const fraseArray = frase.split(' ')
    const newFrase = fraseArray.map(frase => codeWord(frase))
    return newFrase.join(' ')
  }

  generateAlphabet()
  return codeFrase()
}

const test1 = codeString('GUSTAVO')
const test2 = codeString('Gzprgz', 'unreverse')
console.log(test1)
console.log(test2)