"use strict";

function print() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? "Joe" : arguments[0];

    console.log("Hello, " + name);
}

print();