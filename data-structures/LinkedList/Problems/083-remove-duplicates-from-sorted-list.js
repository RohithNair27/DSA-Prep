// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let currentHead = head; // So that head can point to the start
  while (currentHead.next) {
    if (currentHead.val === currentHead.next.val) {
      currentHead.next = currentHead.next.next;
    } else {
      currentHead = currentHead.next;
    }
  }
  return head;
};
