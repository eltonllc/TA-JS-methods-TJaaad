// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = quote.indexOf('is')
/*
2. Find the character at, the index indexOfIs (Problem 1) in quote.
*/
console.log(
  quote.charAt(indexOfIs)
)
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first is in quote is ${indexOfIs+1}`)
/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
function logSix() {
  let newQuote = quote.slice(0, 6)
  for (char of newQuote) {
    console.log(`The character at index ${newQuote.indexOf(char)} is ${char} `)
  }
}
logSix();
/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
console.log(
  from.concat(' said ', quote.concat(' to ', to))
)
/*
6. Does from, to and quote ends with "rk". Check all three.
*/
let chkFuncLast = (str, char = 'rk') => {
  console.log( str.includes(char, str.length-2))
}

chkFuncLast(from);
chkFuncLast(to);
chkFuncLast(quote);

/*
7. Does quote includes the word "Only"
*/
let chkFunc = (str, char) => {
  console.log( str.includes(char))
}
chkFunc(quote, 'only');
/*
8. Does quote includes the word " we"
*/
chkFunc(quote, 'we');
/*
9. Find the index of the the word `we` in quote
*/
console.log(quote.indexOf('we'))
/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(' ')
/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
quoteSplitted[quoteSplitted.length - 1] = 'tomorrow';
console.log(quoteSplitted.toString().replaceAll(',', ' '));
/*
12. Find the index of second "o" in quote. Use indexOf
*/
console.log(quote.indexOf('o', quote.indexOf('o')+1));
/*
13. Find the last index of letter "a" in quote.
*/
console.log(quote.lastIndexOf('a'));
/*
14. Find the second last index of letter "a" in quote.
*/
console.log(quote.lastIndexOf('a', quote.lastIndexOf('a')-1));

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
*/
 
  if (quote.length <= 70) {
    console.log (quote.padEnd(70, '.'))
  }

/*
16. Do same as (15) but the ... should come in start.
*/
if (quote.length <= 70) {
    console.log (quote.padStart(70, '.'))
  }
/*
17. Log the repeat of "Hello World!" 10 times.
*/
let message = 'Hello World!'
console.log(message.repeat(10))
/*
18. Replace today to tomorrow in quote.
*/
console.log(quote.replace('today', 'tomorrow'))
/*
19. Replace Stark to Lannister in quoteTo
*/
console.log(quote.replace('Stark', 'Lannister'))

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
console.log(quote.slice(0,30).padEnd(33, '.'))
/*
21. Find out does quote, quoteFrom, quoteTo starts with "A"
*/
let startsWith = (str, char) => {
  console.log( str.startsWith(char))
}
chkFunc(quote, 'A');
chkFunc(from, 'A');
chkFunc(to, 'A');
