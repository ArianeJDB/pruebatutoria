"use strict";

const terms = [
  {
    text: "pizza",
    total: 10
  },
  {
    text: "patata",
    total: 2
  },
  {
    text: "pegatina",
    total: 100
  }
];

const writeThisWord = (str, n) => {
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};

const writeMe = arr => {
  for (const item of arr) {
    writeThisWord(item.text, item.total);
  }
};

writeMe(terms);
