// creating a stack
const stack = new Stack();

// checking if the stack is empty
stack.isEmpty();

// adding items to the stack
stack.push(5);

// checking the top most value of the stack without removing it
stack.peek();

// returning and removing the top most value inthe stack
stack.pop();

// to get size of the stack
stack.size();

// implementation of a stack class in js
// creating a stack class
class Stack {
  constructor() {
    // we can also used linked links here
    // holds items for our stack
    this.items = [];
  }

  // adding items to the arr
  push(item) {
    this.items.push(item);
  }
  // removing last item of arr
  pop() {
    return this.items.pop();
  }
  // getting items count
  size() {
    return this.items.length;
  }
  // getting last item of arr
  peek() {
    return this.items[this.items.length - 1];
  }
}
