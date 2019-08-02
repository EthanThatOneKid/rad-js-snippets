const toLinkedList = a => a.reduceRight((acc, cur) => ({val: cur, next: acc}), null);

const reverseLinkedList = (list, memo = null) => list == null ? memo : reverseLinkedList(list.next, {val: list.val, next: memo});
