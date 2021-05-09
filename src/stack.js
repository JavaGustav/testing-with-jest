var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    stack.push(1);
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
  return _.last(stack);
    //return stack[stack.length - 1]; // Det här är medvetet felaktigt
}
