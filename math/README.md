# Math Snippets

## `gcd`

This function calculates the [_greatest common divisor_](https://en.wikipedia.org/wiki/Greatest_common_divisor).

```js
const gcd = (a, b) => (!b ? a : gcd(b, b % a));
```

## `reduce`

This function reduces two numbers until they can no longer reduce as whole numbers.

For example, `reduce(4, 8)` will result in `[1, 2]`.

```js
const reduce = (a, b) => {
  const c = gcd(a, b);
  return c > 1 ? reduce(a / c, b / c) : [a, b];
};
```

Use the following snippet instead if you would prefer to pass a length-2 array instead of two numerical arguments.

```js
const reduce2nArr = (a) => {
  const b = gcd(...a);
  return b > 1 ? reduce2nArr(a.map((c) => c / b)) : a;
};
```

## `factorial`

```js
const factorial = (n) => (n == 1 ? n : n * factorial(--n));
```

## `sumArr`

```js
const sumArr = (arr, i = 0) => (i < arr.length ? arr[i] + sumArr(arr, ++i) : 0);
```
