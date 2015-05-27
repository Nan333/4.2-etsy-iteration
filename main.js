var data = require('./code.json');

var sum = 0;

function setSum (item) {
  sum += item.price;
}

data.forEach(setSum);

var averagePrice = sum/data.length;

console.log("The average price of an item is " + averagePrice.toFixed(2));
