class Node{
  constructor(data,next){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  //insert at first node
  insertFirst(data){
    this.head = new Node(data,this.head);
    this.size = this.size + 1;
  }

  //insert at last node
  // insertLast(data){
  //   this
  // }
  printListData(){
    let current = this.head;
    while(current){
      console.log(current.data+'-->');
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(23);
ll.insertFirst(41);
ll.insertFirst(55);
ll.insertFirst(91);
ll.printListData();
// console.log(ll);
