// Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // Adding a count for dulplicates
    this.count = 1;
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
  search(value) {
    // if empty tree
    if (!this.root) return undefined;
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) break;
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      if (!currentNode) return undefined;
    }
    return currentNode;
  }
}

module.exports = BinarySearchTree;
