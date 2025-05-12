const PromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(resolve).catch(reject);
    }
  });
};

const p1 = new Promise((resolve) => setTimeout(() => resolve("p1"), 300));
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("p2"), 100)
);
const p3 = new Promise((resolve) => setTimeout(() => resolve("p3"), 150));

PromiseRace([p1, p2, p3])
  .then(console.log) // expected: 'p2' (resolve fastest)
  .catch(console.error);

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
          results[index] = { status: "fulfilled", value: value };
        })
        .catch((err) => {
          results[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          settledCount += 1;
          resolve(results);
        });
    });
  });
};
