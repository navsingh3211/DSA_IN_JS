class Node{
  constructor(){
    this.data;
    this.next;
  }
}

class LinkedListD{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  addAtStart(data){
    let node = new Node();
    node.data = data;
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  addAtEnd(data){
    let node = new Node();
    node.data = data;
    node.next = null;

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  printData(){
    console.log("start");
    let current = this.head;
    while(current){
      console.log(current.data,'-->');
      current = current.next;
    }
  }
}

const ll = new LinkedListD();
ll.addAtStart(11);
ll.addAtStart(22);
ll.addAtEnd(578);
ll.printData();