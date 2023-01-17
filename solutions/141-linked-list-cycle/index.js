/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const linkedListCycle = (head) => {
  if (!head) return false;
  let a = head;
  let b = head;
  while (a && b && b.next) {
    a = a.next;
    b = b.next.next;
    if (a === b) {
      return true;
    }
  }
  return false;
};
