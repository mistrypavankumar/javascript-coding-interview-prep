// implementation of promise.all

const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedCount += 1;

          if (completedCount === promises.length) {
            return resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

promiseAll([p1, p2, p3]).then(console.log).catch(console.error);

const p4 = Promise.reject("Something is wrong");
promiseAll([p1, p4]).then(console.log).catch(console.error);
