const toLinkedList = arr => arr.reduceRight((a, b) => ({val: b, next: a}), null);

const reverseLinkedList = (list, memo = null) => list == null ? memo : reverseLinkedList(list.next, {val: list.val, next: memo});
