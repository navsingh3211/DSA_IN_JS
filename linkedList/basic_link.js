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

  //insert at index
  insertAt(data,index){

    //if index is out of range
    if(index>0 && index>this.size){
      return;
    }

    //if first index
    if(index===0){
      this.head = new Node(data,this.head)
    }
    let node = new Node(data);
    let current,previous;

    //set current to first
    let count = 0;
    current = this.head;

    while(count<index){
      previous = current; //node before index
      count++;
      current = current.next;//node after index
    }
    node.next = current;
    previous.next = node;
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
    this.size++;
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
ll.insertAt(222,3);
ll.printListData();
// console.log(ll);
