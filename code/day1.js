// Question 1: Implement the compose() and pipe() polyfill

// compose function: Right to left :=> compose(f, g)(x) => f(g(x))
function compose(...functions) {
  return function (value) {
    return functions.reduceRight((acc, fn) => fn(acc), value);
  };
}

// pipe function: Left to right :=> pipe(f, g)(x) => g(f(x))
function pipe(...functions) {
  return function (value) {
    return functions.reduce((acc, fn) => fn(acc), value);
  };
}

const add = (x) => x + 1;
const multiply = (x) => x * 3;
const subtract = (x) => x - 2;

const componsedFunc = compose(subtract, multiply, add);
console.log(componsedFunc(4));

const pipedFunc = pipe(add, multiply, subtract);
console.log(pipedFunc(4));
