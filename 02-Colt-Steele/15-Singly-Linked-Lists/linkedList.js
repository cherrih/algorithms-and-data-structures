class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class linkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    const node = new Node(val);
    if(!this.head){
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop(){
    if(!this.head) return;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length --;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return;
    
  }
}