class Node{
  constructor(val){
      this.val = val
      this.next = null;      
      this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(val){
      this.val = val
      this.next = null;      
  }
  push(val){
      let node = new Node(val);
      if (!this.head){
          this.head = node;
          this.tail = node;
      } else {
          let currTail = this.tail;
          currTail.next = node;
          node.prev = currTail;
          this.tail = node;
      }
      this.length ++;
      return this;
  }
}
