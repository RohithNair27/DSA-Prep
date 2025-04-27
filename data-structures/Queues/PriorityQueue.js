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
}
