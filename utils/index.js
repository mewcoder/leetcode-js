export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 *
 * 根据数组值创建链表
 * @param {*} arr
 * @returns
 */
export function createLinkedList(arr) {
  return arr.reduceRight(
    (pre, cur) => (pre ? new ListNode(cur, pre) : new ListNode(cur, null)),
    null
  );
}
