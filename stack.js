/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val)
    const firstNode = this.first

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
      this.size += 1
      return
    }

    newNode.next = firstNode
    this.first = newNode
    this.size += 1
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const firstNode = this.first

    if (this.size === 0) {
      throw new Error('This queue is empty.')
    }

    this.first = firstNode.next
    this.size -= 1
    return firstNode.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true
    }
    return false
  }
}

module.exports = Stack;
