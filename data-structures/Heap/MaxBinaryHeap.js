class MaxBinaryHeap {
  // finding parent -> (n-1)/2 floored;
  // finding child -> 2n+1 (left) and 2n+2 for the right;
  constructor() {
    this.list = [];
  }
  push(value) {
    this.list.push(value);
    if (this.list.length === 1) return this.list;
    else {
      this._bubbleUp();
    }
    return this.list;
  }
  extractMax() {
    const max = this.list[0];
    const end = this.list.pop();
    if (this.list.length > 0) {
      this.list[0] = end;
      this._bubbleDown();
    }
    return max;
  }
  _bubbleUp() {
    let currentIndex = this.list.length - 1;
    while (true) {
      let currentNode = this.list[currentIndex];
      let parentNodeIndex = Math.floor((currentIndex - 1) / 2);
      if (parentNodeIndex < 0) break;
      let parentNode = this.list[parentNodeIndex];

      if (currentNode >= parentNode) {
        let temp = this.list[parentNodeIndex];
        this.list[parentNodeIndex] = this.list[currentIndex];
        this.list[currentIndex] = temp;
        currentIndex = parentNodeIndex;
      } else {
        break;
      }
    }
  }
  _bubbleDown() {
    let currentIndex = 0;
    let leftNode, rightNode;
    while (true) {
      let currentNode = this.list[currentIndex];
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let swap = null;
      if (leftIndex < this.list.length) {
        leftNode = this.list[leftIndex];
        if (leftNode > currentNode) {
          swap = leftIndex;
        }
      }
      if (rightIndex < this.list.length) {
        rightNode = this.list[rightIndex];
        if (
          (!swap && rightNode > currentNode) ||
          (swap && rightNode > leftNode)
        ) {
          swap = rightIndex;
        }
      }
      if (!swap) break;
      let temp = this.list[swap];
      this.list[swap] = this.list[currentIndex];
      this.list[currentIndex] = temp;
      currentIndex = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.push(10);
heap.push(20);
heap.push(0);
heap.push(30);
heap.push(-10);
heap.push(30);
console.log(heap.list);
