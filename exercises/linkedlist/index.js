// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode;
    } else {
      return null;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null;
    } else {
      let currentNode = this.head;
      let nextNode = currentNode.next;
      while (nextNode.next) {
        currentNode = nextNode;
        nextNode = currentNode.next;
      }
      currentNode.next = null;
    }
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }


  getAt(index) { // returns the node at the provided index
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (this.head) {
      if (index === 0) { // deletes the first node
        this.head = this.head.next;
      } else {
        const previous = this.getAt(index - 1); // node is the previous-to-be-deleted node
        if (previous) {
          if (previous.next && previous.next.next) {
            previous.next = previous.next.next;
            return;
          } else {
            previous.next = null;
          }
        }
      }
    }
  }

  insertAt(data, index) {
    if (index === 0 ) {
      this.insertFirst(data, this.head);
    } else {
      const previous = this.getAt(index - 1);
      if (previous) {
        previous.next = new Node(data, previous.next);
      } else {
        this.insertLast(data);
      }
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };
