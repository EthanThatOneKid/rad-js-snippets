# Array Snippets

> 💡 Linked Lists in JavaScript can be defined as such:
> _An object containing a value property `val` and another property `next`._ > _Property `next` represents a nested Linked List.`_

## `toLinkedList`

```js
const toLinkedList = (arr) =>
  arr.reduceRight((a, b) => ({ val: b, next: a }), null);
```

## `reverseLinkedList`

```js
const reverseLinkedList = (list, memo = null) =>
  list == null
    ? memo
    : reverseLinkedList(list.next, { val: list.val, next: memo });
```
