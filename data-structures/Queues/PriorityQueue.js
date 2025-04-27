class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
  }
  enqueue(value = "Least priority", priority = 5) {
    let newNode = new Node(value, priority);
    this.list.push(newNode);
    let listLength = this.list.length;
    if (listLength === 1) return this.list;
    else {
      let currentIndex = listLength - 1;
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      while (
        parentIndex >= 0 &&
        this.list[parentIndex].priority > newNode.priority
      ) {
        let temp = this.list[parentIndex];
        this.list[parentIndex] = this.list[currentIndex];
        this.list[currentIndex] = temp;

        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1) / 2);
      }
      return this.list;
    }
  }
  dequeue() {
    if (this.list.length === 0) return undefined;
    let dequeueNode;

    dequeueNode = this.list[0];
    if (this.list.length === 1) {
      this.list.pop();
      return dequeueNode;
    }
    // Assigning the first element as the last element
    // also removing the last element
    this.list[0] = this.list.pop();
    let currentIndex = 0;
    // finding the both child in the array

    let leftNode, rightNode;
    while (true) {
      let leftNodeIndex = 2 * currentIndex + 1;
      let rightNodeIndex = 2 * currentIndex + 2;
      let swap = null;
      if (leftNodeIndex < this.list.length) {
        leftNode = this.list[leftNodeIndex];
        if (leftNode.priority < this.list[currentIndex].priority) {
          swap = leftNodeIndex;
        }
      }
      if (rightNodeIndex < this.list.length) {
        rightNode = this.list[rightNodeIndex];
        if (
          (!swap && rightNode.priority < this.list[currentIndex].priority) ||
          (swap && rightNode.priority < leftNode.priority)
        ) {
          swap = rightNodeIndex;
        }
      }
      if (!swap) break; // break if no swap happen with children nodes
      let temp = this.list[swap];
      this.list[swap] = this.list[currentIndex];
      this.list[currentIndex] = temp;
      currentIndex = swap;
    }
    return dequeueNode;
  }
}
