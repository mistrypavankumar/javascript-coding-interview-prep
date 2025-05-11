###  Question 2: Polyfill for Promise.all
+ Promise.all(promises) takes an array of promises and:
- Resolves when all promises resolve, with an array of their values (in order).
- Rejects immediately if any promise rejects

**This is useful when we need multiple async operations to complete before continuing**

### Example:
```
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

promiseAll([p1, p2, p3]).then(console.log);  // [1, 2, 3]

const p4 = Promise.reject("Something is wrong");
promiseAll([p1, p4]).then(console.log);   // Something is wrong

```