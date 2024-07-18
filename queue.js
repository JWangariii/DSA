// creating an empty queue
const queue = new Queue();

// check id queue is empty
queue.isEmpty();

// adding values to queue
queue.enqueue(5);

// removing items form the front of queue
queue.dequeue();

// getting items infornt of the queue
queue.peek();

// ckheck number of items
queue.size();

// iplementation in js
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
  peek() {
    return this.items[0];
  }
}
