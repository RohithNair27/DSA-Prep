/* Follows LIFO hence we can you push and pop */
class stackArray {
  constructor() {
    this.list = [];
  }
  //0(1)
  push(value) {
    this.list.push(value);
  }
  //o(1)
  pop() {
    return this.list.pop();
  }
}
