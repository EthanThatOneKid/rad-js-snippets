// Reference:
// * [function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
// * [yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

// This Program Should Output:
// 0 1 1 2 3 5 8 13 21 34 55 89

// Generator Function Initialized in Object
const fib = {
  *[Symbol.iterator]() {
    let a = 0, b = 1;
    yield a;
    while (true) {
      let temp = a;
      a += b;
      b = temp;
      yield a;
    }
  }
};

// Iterating Through Generator Using for...of
for (let n of fib) {
  if (n < 100) {
    console.log(n);
  } else {
    break;
  }
}
