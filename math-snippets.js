const gcd = (a, b) => !b ? a : gcd(b, b % a);

const reduce = (a, b) => {
    const c = gcd(a, b);
    return c > 1
        ? reduce(a / c, b / c)
        : [a, b];
};

const reduce2nArr = a => {
    const b = gcd(...a);
    return b > 1
        ? reduce2nArr(a.map(c => c / b))
        : a;
};

const factorial = n => n == 1 ? n : n * factorial(--n);

const sum = (arr, i = 0) => i < arr.length ? arr[i] + sum(arr, ++i) : 0;