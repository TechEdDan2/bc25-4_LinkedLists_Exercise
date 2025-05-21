/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    let removedNode;
    if (this.length === 0) {
      throw new Error("Linked List empty");
    } else if (this.length === 1) {
      removedNode = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      let curNode = this.head;
      // traverse the linked list
      while (curNode.next !== this.tail) {
        curNode = curNode.next;
      }
      removedNode = this.tail.val;
      curNode.next = null;
      this.tail = curNode;

    }
    this.length--;
    return removedNode;

  }

  /** shift(): return & remove first item. */

  shift() {
    let removedNode;
    if (this.length === 0) {
      throw new Error("Linked List empty");
    } else if (this.length === 1) {
      removedNode = this.head.val;
      this.head = null;
      this.tail = null;
    } else {
      removedNode = this.head.val;
      this.head = this.head.next;

    }
    this.length--;
    return removedNode;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

// Standard Node.js syntax for exporting a module
// This allows the class to be imported in other files
module.exports = LinkedList;
