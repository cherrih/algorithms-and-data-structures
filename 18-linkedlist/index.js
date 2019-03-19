// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    const checkNext = (node) => {
      if(node.next) {
        count += 1;
        checkNext(node.next);
      }
    } 
    if (this.head) {
      count += 1;
      checkNext(this.head);
    }
    return count;
  }
}

module.exports = { Node, LinkedList };
