class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
    return this.queue;
  }
  dequeue() {
    return this.queue.shift();
  }
}
