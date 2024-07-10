class Node{
  constructor(data,next=null){
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(100);
// console.log(n1);

class LinkList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  // #insert first node
  insertFirst(data){
    this.head = new Node(data,this.head);
    this.size++;
  }

  //insert last node
  insertLast(data){
    let node = new Node(data);
    let current;

    //if empty,make head
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

  //insert at index
  insertAtIndex(index,data){
    let current;
    let node = new Node(data);
    current = this.head;
    while(index>1){
      current = current.next;
      index--;
    }
    let temp = current.next;
    current.next = node;
    node.next = temp;
    this.size++;
  }

  //get at index
  getAtIndex(index){
    let current;
    current = this.head;
    while(index>0){
      current = current.next;
      index--;
    }
    return current.data;
  }

  //remove at index
  removeAtIndex(index){
    let current = this.head;

    //remove from 1st index--> to do

    while(index>1){
      current = current.next;
      index--;
    }
    
    let temp = current;
    temp.next = current.next.next;
    this.size--;
  }

  //clear list

  //print the list data
  printListData(){
    let current = this.head;
    while(current){
      console.log(current.data,'-->');
      current = current.next;
    }
  }

}

const ll = new LinkList();
ll.insertFirst(200);
ll.insertFirst(1100);
ll.insertFirst(2200);
ll.insertLast(1111);
ll.insertAtIndex(2,343443434);
// console.log(ll.getAtIndex(2),'ll.getAtIndex(2)');
// console.log(ll.size,'ll.size');

ll.removeAtIndex(4);

ll.printListData()