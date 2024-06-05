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
    this.size++;
  }

  //insert at last node
  insertLast(data){
    let node = new Node(data);
    let current;
    if(!this.head){
      this.head = node;
    }else{
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.size ++;
  }
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
ll.insertLast(111);
ll.printListData();
// console.log(ll);
