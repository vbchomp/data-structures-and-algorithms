/* eslint-disable no-undef */
'use strict';

const HashTable = require('../hashTables/util/hashtable.js');

function repeatedWord(text) {
  let regexMatch = text.match('.*[a-zA-Z].*').join(' ').toLowerCase();
  let myHashTable = new HashTable(1024);
  let matches = regexMatch.split(' ');
  for (item of matches) {
    let check = myHashTable.get(item);
    if (item === check) {
      console.log('Repeated words', item);
      let results = item;
      break;
    }
    myHashTable.set(item, item);
  }
  console.log(results);
  return results;
}

let text1 = 'Once upon a time, there was a brave princess who';

repeatedWord(text1);

// function topThreeWords(text) {
//   let regex = '.*[a-zA-Z].*';
//   if (text.match(regex)) {
//     let wordMap = new Map();
//     text.split(' ').forEach(word => {
//       if (word) {
//         word = word.toLowerCase();
//         if (wordMap.has(word)) {
//           let count = wordMap.get(word);
//           count ++;
//           wordMap.set(word, count);
//         } else {
//           wordMap.set(word, 1);
//         }
//       }
//     });
//     const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));

//     let result = Array.from(sortedWordMap.keys()).filter( (word, index) => index < 3);
//     result = result.map(res => {
//       res = res.replace(/[/.,]/g, '');
//       if (res !== '') {
//         return res;
//       }
//     });
//     return result.filter(res => res !== undefined);

//   } else {
//     return [];
//   }

// }

// let text1 = 'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.';

// console.log(topThreeWords(text1));
// topThreeWords(text1);

// // https://anothercodingblog.com/2021/01/26/weekly-coding-challenge-most-frequently-used-words-in-a-text-written-in-javascript/
