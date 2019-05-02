class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class LinkedList{
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
    let current = this.head;
    this.head = current.next;
    this.length --;
    if(!this.length){
      this.tail = null;
    }
    return current;
  }
  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;  
    }
    this.length ++;
    return this;
  }
  get(i){
    if (i < 0 || i >= this.length) return null;
    let j = 0;
    let curr = this.head;
    while(j !== i){
      curr = curr.next;
      j++;
    }
    return curr;
  }
  set(val, i){
    let target = this.get(i);
    if (!target) return false;
    target.val = val;
    return true;
  }
  insert(val, i){
    if (i < 0 || i > this.length) return false;
    if (i === this.length) {
      this.push(val);
    } else if (i === 0) {
      this.unshift(val);
    } else {
      let newNode = new Node(val);
      let target = this.get(i-1);
      newNode.next = target.next;
      target.next = newNode;
      this.length ++;
    }
    return true;
  }
}

var list = new LinkedList();
list.push(100)
list.push(200)
list.push(4)
console.log(list.insert(0,'FIRST'))
