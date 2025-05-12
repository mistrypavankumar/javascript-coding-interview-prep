// Array.prototype.myMap

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this)); // value, index , array
  }

  return result;
};

const arr = [1, 2, 3, 4];

// map
console.log(arr.myMap((x) => x * 2)); // [2, 4, 6, 8]

// Array.prototype.myFilter
Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// filter
console.log(arr.myFilter((x) => x > 1)); // [3, 4]

// Array.prototype.myReduce
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0]; // first element becomes intital value
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this); // inital, value, index, array
  }

  return accumulator;
};

// reduce
console.log(arr.myReduce((acc, cur) => acc + cur, 0)); // 10

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// foreach
console.log(arr.myForEach((x) => console.log(x)));
