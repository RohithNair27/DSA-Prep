class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //push - 0(1)
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  // shfit- 0(1)
  dequeue() {
    if (!this.head) return undefined;
    let dequeuedElement = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head.next = null; // avoid memory leak
      this.head = newHead;
    }
    this.length--;
    return dequeuedElement;
  }
}
