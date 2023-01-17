/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export const intersectionOfTwoLinkedLists = (headA, headB)=> {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
};
