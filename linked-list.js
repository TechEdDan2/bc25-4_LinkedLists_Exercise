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
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }
    let curNode = this.head;
    for (let i = 0; i < idx; i++) {
      curNode = curNode.next;
    }
    return curNode.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index out of bounds");
    }
    let curNode = this.head;
    for (let i = 0; i < idx; i++) {
      curNode = curNode.next;
    }
    curNode.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index param out of bounds");
    }
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let curNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curNode = curNode.next;
      }
      newNode.next = curNode.next;
      curNode.next = newNode;
      this.length++;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index param out of bounds");
    }
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let curNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        curNode = curNode.next;
      }
      const removedNode = curNode.next.val;
      curNode.next = curNode.next.next;
      this.length--;
      return removedNode;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      throw new Error("Linked List empty");
    }
    let sum = 0;
    let curNode = this.head;
    while (curNode) {
      sum += curNode.val;
      curNode = curNode.next;
    }
    return sum / this.length;

  }
}

// Standard Node.js syntax for exporting a module
// This allows the class to be imported in other files
module.exports = LinkedList;
