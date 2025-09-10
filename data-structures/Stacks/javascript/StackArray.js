class stackArray {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    if (this.list.length === 0) return "Pop from empty stack"
    return this.list.pop();
  }

}
