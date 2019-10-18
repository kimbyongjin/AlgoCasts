// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.a = new Stack();
    this.b = new Stack();
  }
  // it is imperative that all records stay in order.
  // So, to organize the records, I should always insert to the same stack.

  add(record) {
    // the add method should be able to insert a record to the queue but keep in proper order
    // stack 'a' will always be my storage stack.
    // stack 'b' will collect all of the values when I need to remove or peek a value
    this.a.push(record);
  }

  remove() {
    let targetRecord;

    while(this.a.peek()) {
      this.b.push(this.a.pop());
    }

    targetRecord = this.b.pop();

    while(this.b.peek()) {
      this.a.push(this.b.pop());
    }

    return targetRecord;
  }

  peek() {
    let targetRecord;

    while(this.a.peek()) {
      this.b.push(this.a.pop());
    }

    targetRecord = this.b.peek();

    while(this.b.peek()) {
      this.a.push(this.b.pop());
    }

    return targetRecord;
  }
}

module.exports = Queue;
