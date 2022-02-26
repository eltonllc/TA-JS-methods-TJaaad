// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '))
// - Add two new words in the strings array "called" and "sentance"
strings.push('called','sentence')
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(' '))
// - Remove the first word in the array (strings)
strings.shift();
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter(string => 
   string.includes('is')
))
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.join().indexOf('is'))
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(
  numbers.every(number => number % 3 == 0)
)
// -  Sort Array from smallest to largest
numbers.sort((a, b) => { return a - b });
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers
console.log(numbers.sort((a, b) => { return a - b })[numbers.length-1]);

// - Find all the even numbers
let evenNumbers = numbers.filter(
    (number) => number % 2 == 0
)
// - Find all the odd numbers
let oddNumbers = numbers.filter(
    (number) => number % 2 != 0
)
// - Place a new word at the start of the array use (upshift)
strings.unshift('new word');
// - Make a subset of numbers array [18,9,7,11] 
    // answer : use slice
// - Make a subset of strings array ['a','collection']
//  answer: use slice
// - Replace 12 & 18 with 1221 and 1881
//  answer : use splice
// - Replace words in strings array with the length of the word
// answer :use splice
// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers.filter(
  (element) => {
    return element.firstname.startsWith('J')
  }
))
// - Create new array with only first name
let firstname = customers.map(
  (element) => {
    return element.firstname;
  }
);
// - Create new array with all the full names (ex: "Joe Blogs")
let fullname = customers.map(
  (element) => {
    return element.firstname.concat(' ', element.lastname);
  }
);
// - Sort the array created above alphabetically
fullname.sort();
// - Create a new array that contains only user who has at least one vowel in the firstname.
console.log(customers.filter(
  (element) => {
    return element.firstname.includes('a') || element.firstname.includes('e') || element.firstname.includes('i') || element.firstname.includes('o') || element.firstname.includes('u')
  }
))