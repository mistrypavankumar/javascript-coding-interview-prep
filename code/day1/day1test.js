// compose: right to left => compose(f, g)(x) = f(g(x))
const compose = (...fns) => {
  return (x) => {
    return fns.reduceRight((prev, fn) => fn(prev), x);
  };
};

// pipe: left to right => pipe(f, g)(x) = g(f(x))
const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((prev, fn) => fn(prev), x);
  };
};

const add = (x) => 5 + 1; // 6
const multiply = (x) => 6 * 2; // 12
const subtract = (x) => 12 - 3; // 9

const composed = compose(subtract, multiply, add); // subtract(12)
console.log(composed(5));

const piped = pipe(add, multiply, subtract); // subtract(12)
console.log(piped(5));

//
[1].reduceRight((prev, curr) => console.log(prev, curr));
