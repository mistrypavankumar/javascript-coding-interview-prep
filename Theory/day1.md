#### Question 1: Implement the compose() and pipe() polyfill
+ compose() and pipe() are functional programming concept used to **combine multiple functions**.

- compose(f, g)(x) is same as f(g(x)). It applies functions right to left.
- pipe(f, g)(x) is the same as g(f(x)). It applies functions left to right

*They’re useful for building reusable function chains.*

#### Example:
```
const add = (x) => x + 1;
const double = (x) => x * 2;

// compose: right to left f(g(x))
const composed = compose(double, add);   // double(add(5)) = 12
console.log(composed(5));   // output: 12

// pipe: left to right g(f(x))
const piped = pipe(add, double); // double(add(5)) = 12
console.log(piped(5));    // output: 12

```

* Note: compose() and pipe() these functions by default doesn't exists. We need to create it. Check out day1.js in code folder* 