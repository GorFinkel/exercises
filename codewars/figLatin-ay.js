function pigIt(stra){
  //Code here
  let arrOfWords=stra.split(' ')
  let pun=/[^\w\s\']/
if(pun.test(stra)){
    arrOfWords.pop()
  }
  for (let i=0; i<arrOfWords.length; i++){
    let letter=arrOfWords[i][0]
    arrOfWords[i]=arrOfWords[i].slice(1,arrOfWords[i].length)
    arrOfWords[i]+=letter+'ay'
}
  return arrOfWords.join(' ')
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


// \w is any digit, letter, or underscore.
// \s is any whitespace.
// [^\w\s\'] is anything that's not a digit, letter, whitespace, underscore or a single quote.
// [^\w\s\']|_ is the same as #3 except with the underscores added back in.



function pigIt(str){
  let strArr = str.split(' ');
  let pigLatin = [];

  for(let word of strArr){
    if((/([a-zA-Z])/).test(word)){
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }else{
      pigLatin.push(word);
    }
  }
  return pigLatin.join(" ");
}
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
