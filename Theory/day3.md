### Question 3: Polyfill for Promise.race
+ Promise.race() takes an array of promises and:
- Resolves or rejects as soon as one of the promises settles (whichever is first)
- The returned promise adopts the state and value of the first settled promise (fulfilled or rejected)

### Example:

```
const p1 = new Promise(resolve => setTimeout(() => resolve('p1'), 300));
const p2 = new Promise(resolve => setTimeout(() => resolve('p2'), 100));
const p3 = new Promise(resolve => setTimeout(() => resolve('p3'), 150));


PromiseRace([p1, p2, p3])
    .then(console.log)    // expected: 'p2' (resolve fastest)
    .catch(console.error);

```
---

###  Question 4: Polyfill for Promise.allSettled

+ Promise.allSettled() returns a promise that resolves after all the input promise settle (regardless of successs or failure)

+ Each result is an object with either:
    - `{status: "fulfilled", value: ...}`
    - `{status: "rejected", reason: ...}`


*It never rejects — it always resolves with an array of result objects.*

### Example
```
const p1 = Promise.resolve(1);
const p2 = Promise.reject("error");
const p3 = Promise.resolve(3)

PromiseAllSettled([p1, p2, p3]).then(console.log);

// Expected:
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "error" },
  { status: "fulfilled", value: 3 }
]


```