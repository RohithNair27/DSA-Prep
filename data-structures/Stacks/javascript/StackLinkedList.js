class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // this is unshift even though the name is push
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // O(1) pop but internally it's a shift
  pop() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let nextNode = this.head.next;
      this.head.next = null; // To avoid memory leaks
      this.head = nextNode; // New head
    }
    this.length--;
    return shiftedNode;
  }
}
