// Let's have some review: it is up to you to create your own queue data structure.
// Queues are FIFO - first in first out - in nature. Your queue should be a class
// that has the methods "add" and "remove". Adding to the queue should store an
// element until it is removed.

class Queue {
  constructor() {
    this.arr = [];
  }

  add(value) {
    this.arr.push(value)
  }

  remove() {
    this.arr.shift();
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.remove();
