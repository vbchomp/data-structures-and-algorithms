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

// used random paragraph generator here https://randomwordgenerator.com/paragraph.php
let text1 = 'It\'s not his fault. I know you\'re going to want to, but you can\'t blame him. He really has no idea how it happened. I kept trying to come up with excuses I could say to mom that would keep her calm when she found out what happened, but the more I tried, the more I could see none of them would work. He was going to get her wrath and there was nothing I could say to prevent it.';
let text2 = 'Sitting in the sun, away from everyone who had done him harm in the past, he quietly listened to those who roamed by. He felt at peace in the moment, hoping it would last, but knowing the reprieve would soon come to an end. He closed his eyes, the sun beating down on face and he smiled. He smiled for the first time in as long as he could remember.';
let text3 = 'This is important to remember. Love isn\'t like pie. You don\'t need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more.';

repeatedWord(text1);
repeatedWord(text2);
repeatedWord(text3);

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
