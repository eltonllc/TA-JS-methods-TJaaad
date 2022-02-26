let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let findLongestWord = () => {
   words.sort(
    (a, b) => {
      return b.length - a.length;
    }
  )
  return words[0];
}

findLongestWord();
// - Convert the above array "words" into an array of length of word instead of word.
wordslength = words.map(
  word => word.length
)
// - Create a new array that only contains word with atleast one vowel.
vowel = words.filter(
  (word) => {
    return word.includes('a') || word.includes('e') || word.includes('o') || word.includes('u')
  }
)
// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));
// - Create a new array that contians words not starting with vowel.
notVowel = words.filter(
  (word) => {
    return !(word.startsWith('a') || word.startsWith('e') || word.startsWith('o') || word.startsWith('u'))
  }
)
console.log(notVowel);
// - Create a new array that contianse words not ending with vowel
notVowelLast = words.filter(
  (word) => {
    return !(word.endsWith('a') || word.endsWith('e') || word.endsWith('o') || word.endsWith('u'))
  }
)
console.log(notVowelLast);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let sumArray = (numbers) => {
  let sum = (a, b) => {
    return a + b;
  }
  return numbers.reduce(sum, 0)
}
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multThree = (numbers) => {
  return numbers.map(number => number*3)
}
console.log(multThree(numbers));
// - Create a new array that contains only even numbers
// completed
// - Create  a new array that contains only odd numbers.
// completed
// - Create a new array that should have true for even number and false for odd numbers.
// completed
// - Sort the above number in assending order.
// completed
// - Does sort mutate the original array?
console.log('It mutates the original array')
// - Find the sum of the numbers in the array.
// completed
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
// completed
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = (strings) => {
  let sum = (a, b) => { return a + b };
  let total = strings.map(word => word.length).reduce(sum, 0);
  return total / (strings.length);
}
console.log(averageWordLength(strings));