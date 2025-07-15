//  Learning a LinkedList :-
//  It has node ( elements) and pointer ( for the next node connection).
// It have methods like append() -  add the node to last, prepend() - add node in the start, delete() - delete any node, list() - log the elements

// Used - Best for rapidly insertion/deletion operations.

// Ex . -

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // add the node in the last of linkedlist
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // if list already have elements then
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data) {
    const preNode = new Node(data);
    let current = this.head;
    if (this.head === null) {
      this.head = preNode;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // Output: 10, 20, 30

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Add Two Numbers
