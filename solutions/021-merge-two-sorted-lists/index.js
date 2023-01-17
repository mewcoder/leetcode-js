import { ListNode } from "../../utils/index.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export const mergeTwoSortedLists = (list1, list2) => {
  const head = new ListNode();
  let pre = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      pre.next = list1;
      list1 = list1.next;
    } else {
      pre.next = list2;
      list2 = list2.next;
    }
    pre = pre.next;
  }
  if (list1) {
    pre.next = list1;
  }
  if (list2) {
    pre.next = list2;
  }
  return head.next;
};
