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
    let node = this.head;
    while(node) {
      count += 1;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if(!this.head) {
      return null;
    }
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if(!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head){
      return;
    }
    if (!this.head.next) {
      return this.head = null;
    }
    let node = this.head;
    while(node.next) {
      if (node.next.next === null) {
        return node.next = null;
      }
      node = node.next;
    }
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);      
    }
  }
  getAt(index) {
    let node = this.head;
    let count = 0;
    while(node) {
      if (count === index){
        return node;
      }
      node = node.next;
      count += 1;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    const prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) {
      return
    }
    prevNode.next = prevNode.next.next;
  }
  insertAt(data, index) {
    // empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    // if index is 0
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // if index out of bounds add to end
    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }
  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

}


module.exports = { Node, LinkedList };
