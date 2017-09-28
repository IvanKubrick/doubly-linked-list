const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      var node = new Node(data);
      if(this._head == null) {
        this._head = node;
      }
      if (this._tail != null) {
        this._tail.next = node;
        node.prev = this._tail;
      }
      this._tail = node;
      this.length++;
      return this;
    }

    head() {
      return this._head ? this._head.data : null;
    }

    tail() {
      return this._tail ? this._tail.data : null;
    }

    at(index) {
      var node = this._head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }
      return node.data;
    }

    insertAt(index, data) {
      var node = new Node(data),
          prevNode = this._head,
          nextNode;
      for (var i = 0; i < index - 1; i++) {
        prevNode = prevNode.next;
      }
      nextNode = prevNode.next;

      node.prev = prevNode;
      node.next = nextNode; 
      prevNode.next = node;
      nextNode.prev = node;

      this.length++;
    }

    isEmpty() {
      return this.length == 0 ? true : false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }

    deleteAt(index) {
      var node = this._head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }

      var prevNode = node.prev,
          nextNode = node.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }

    reverse() {

    }

    indexOf(data) {
      var node = this._head;
      if (node.data == data) return 0;
      for (var i = 1; i < this.length; i++) {
        node = node.next;
        if (node.data == data) return i;
      }
      return -1;
    }
}

module.exports = LinkedList;
