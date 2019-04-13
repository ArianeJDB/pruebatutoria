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

const ten = (str, veces) => {
  for (let i = 0; i < veces; i++) {
    console.log(str);
  }
};

const nueva = arr => {
  for (const item of arr) {
    ten(item.text, item.total);
  }
};

nueva(terms);
