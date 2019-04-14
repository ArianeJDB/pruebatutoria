"use strict";

// const terms = [
//   {
//     text: "pizza",
//     total: 10
//   },
//   {
//     text: "patata",
//     total: 2
//   },
//   {
//     text: "pegatina",
//     total: 100
//   }
// ];
const api = 'https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js';

const writeMe = () => {
fetch(api)
  .then(response => response.json())
  .then(data =>  {
      console.log('array de obj', data.results);
  })

  const writeThisWord = (str, n) => {
    for (let i = 0; i < n; i++) {
      console.log(str);
    }
    };

  for (const item of api) {
    writeThisWord(item.text, item.total);
    }
};

console.log(writeMe());
