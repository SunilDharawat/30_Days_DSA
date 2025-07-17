// Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Here we are creating from start to end.

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
  // methods for adding the data
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Print method
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result = result + current.data + " ";
      current = current.next;
    }
    console.log(result);
  }
}

function deleteDuplicates(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(1);
list.append(2);
list.append(3);
list.append(3);

//  Before removing the duplicates
list.print();

deleteDuplicates(list.head);

//  After removing the duplicates
list.print();
