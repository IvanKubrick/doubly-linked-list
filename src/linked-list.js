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

    nodeAt(index) {
      var node = this._head;
      for (var i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }

    at(index) {
      return this.nodeAt(index).data;
    }

    insertAt(index, data) {
      if (index > this.length) return this; 
      var node = new Node(data);
      if (index == this.length) {
        this.append(node);
      } else if (index == 0) {
        node.next = this._head;
        this._head.prev = node;
        this._head = node;
      } else {
        var prevNode = this.nodeAt(index - 1);
        prevNode.next.prev = node;
        node.next = prevNode.next;
        prevNode.next = node;
        node.prev = prevNode;
      }
      this.length++;
      return this;
    }

    isEmpty() {
      return this.length == 0 ? true : false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      if (index > this.length) return this;
      var node = this.nodeAt(index);
      if (index == 0 && this.length == 1) {
        this.clear();
      } else if (index == 0) {
        node.next.prev = null;
        this._head = node.next;
      } else if (index == this.length) {
        node.prev.next = null;
        this._tail = node.prev;
      } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
      }
      this.length--;
      return this;
    }

    reverse() {
      var node = this._head;
      while (node.next != null) {
        var temp = node.prev;
        node.prev = node.next;
        node.next = temp;
        node = node.prev;
      }
      node.next = node.prev;
      node.prev = null;
      this._tail = this._head;
      this._head = node;
      return this;
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