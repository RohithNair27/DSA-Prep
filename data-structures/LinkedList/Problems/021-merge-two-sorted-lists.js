/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let startHead = new ListNode();
  let dummy = startHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      startHead.next = list1;
      list1 = list1.next;
    } else {
      startHead.next = list2;
      list2 = list2.next;
    }
    startHead = startHead.next;
  }
  if (list1) {
    startHead.next = list1;
  }
  if (list2) {
    startHead.next = list2;
  }
  return dummy.next;
};
