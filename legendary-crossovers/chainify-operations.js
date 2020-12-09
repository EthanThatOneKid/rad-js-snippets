// some one-liners i made...
const toLinkedList = arr =>
  arr.reduceRight((next, val) => ({ val, next }), null);
const reverseLinkedList = (list, memo = null) =>
  list !== null
    ? reverseLinkedList(list.next, { val: list.val, next: memo })
    : memo;

// chainify returns a function that returns the given functions' chained result
const chainify = (...chain) => arg => chain.reduce((a, b) => b(a), arg);

// let's use this as our test subject
const arg = [1, 2, 3];

// chainify allows this nested, ugly mess...
// `const ans = reverseLinkedList(toLinkedList(arg));`
// to be eloquently written as...
const ans = chainify(toLinkedList, reverseLinkedList)(arg);

console.log(ans); // which correctly prints...
// {
//   val: 3,
//   next: {
//     val: 2,
//     next: {
//       val: 1,
//       next: null
//     }
//   }
// }
