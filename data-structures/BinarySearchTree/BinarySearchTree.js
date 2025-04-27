// Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // Adding a count for dulplicates
    this.count = 0;
  }
}

// Searching - inserting (o(log n))
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Create a newNode
    let newNode = new Node(value);
    // if the root is empty
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // for duplicate
        if (currentNode.value === value) {
          currentNode.count += 1;
          break;
        }
        if (currentNode.value >= value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
    return this;
  }
}
