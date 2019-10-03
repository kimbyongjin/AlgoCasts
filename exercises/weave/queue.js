// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  // peek method will check what the next value of the queue that would br removed with the next call of the
    // remove method. Can be used to ensure that weaving queues will not populate undefined for queues of
    // differing length.
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
