/*John Stewart
  Whaletalk.js project from Codecademy
  10/14/2022
*/
let input = "Hi My name is John and, I am going for be a software developer!";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i)
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }

  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i])
  }
}

let resultString = resultArray.join('').toUpperCase();


console.log(resultString);