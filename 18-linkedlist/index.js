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
    if (!this.head) {
      return this.head = new Node(data);
    }
    let node = this.head;
    while(node){
      if (node.next === null) {
        return node.next = new Node(data);
      }
      node = node.next;
    }

  }
}

module.exports = { Node, LinkedList };
