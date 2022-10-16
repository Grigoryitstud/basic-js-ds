const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let main = this.head;
      while(main.next) {
        alert(main.value)
        main = main.next;
      }
  }

  enqueue(x) {
    if (this.length == 0) {
      this.head = new ListNode(x);
    } else {
      let main = this.head;
      while(main.next) {
        main = main.next;
      }
      main.next = new ListNode(x)
    }
    this.length ++;
  }

  dequeue() {
    let main = this.head;
    this.head = main.next
  }
}

module.exports = {
  Queue
};
