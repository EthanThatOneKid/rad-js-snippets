const toLinkedList = a => a.reduceRight((acc, cur) => ({val: cur, next: acc}), null);
