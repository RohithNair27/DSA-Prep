class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return null;
    let popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = this.tail.prev;
      this.tail.prev = null;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return popedNode;
  }
  shift() {
    if (!this.head) return null;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let nextNode = this.head.next;
      this.head.next = null; // prev is already null
      nextNode.prev = null;
      this.head = nextNode;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length || !this.head) return null;
    let result;
    let middlePoint = this.length / 2;
    if (index <= middlePoint) {
      let currentNode = this.head;
      for (let i = 0; i <= middlePoint; i++) {
        if (i === index) {
          result = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
    } else {
      let currentNode = this.tail;
      for (let i = this.length - 1; i > middlePoint; i--) {
        if (i === index) {
          result = currentNode;
          break;
        }
        currentNode = currentNode.prev;
      }
    }
    return result;
  }
  insert(index, value) {
    if (index === this.length) {
      return !!this.push(value);
    } else if (index === 0) {
      return !!this.unshift(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      if (!prevNode) return false;
      let nextNode = prevNode.next;
      newNode.prev = prevNode;
      newNode.next = nextNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length || !this.head) return null;

    let result;
    if (index === this.length - 1) {
      result = this.pop();
    } else if (index === 0) {
      result = this.shift();
    } else {
      let prevNode = this.get(index - 1);
      if (!prevNode) return false;
      let removeNode = prevNode.next;
      let nextNode = removeNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      removeNode.next = null;
      removeNode.prev = null;
      result = removeNode;
      this.length--;
    }

    return result;
  }
}

let list = new DoubleLinkedList();
