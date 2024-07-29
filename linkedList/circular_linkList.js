class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

let one = new Node(3);
let two = new Node(5);
let three = new Node(7);

one.next = two;
two.next =  three;
three.next = one;