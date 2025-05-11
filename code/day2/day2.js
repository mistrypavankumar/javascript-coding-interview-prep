// implement a polyfill for Promise.all

const PromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

PromiseAll([p1, p2, p3]).then(console.log);

const p4 = Promise.reject("Something went wrong");

PromiseAll([p1, p2, p4])
  .then(console.log)
  .catch((err) => console.error(err));
