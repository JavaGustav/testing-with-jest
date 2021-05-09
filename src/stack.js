var _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.[stack.length];
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return stack[stack.length - 1]; // Det här är medvetet felaktigt
}
