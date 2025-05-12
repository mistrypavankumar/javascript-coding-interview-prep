const PromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};

const PromiseAllSettled = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let settledCount = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((err) => {
          results[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          settledCount += 1;

          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const p1 = Promise.resolve(1);
const p2 = Promise.reject("error");
const p3 = Promise.resolve(3);

PromiseAllSettled([p1, p2, p3]).then(console.log);

// Expected:
// [
//   { status: "fulfilled", value: 1 },
//   { status: "rejected", reason: "error" },
//   { status: "fulfilled", value: 3 }
// ]
