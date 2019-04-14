"use strict";

const api =
  "https://raw.githubusercontent.com/oneeyedman/terms/master/terms.js";

fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(writeMe(data.results));
  });

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

