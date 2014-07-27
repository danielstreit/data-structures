var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = makeNode(value);
      list.tail = list.head;
    } else {
      list.tail.next = makeNode(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.addToHead = function(value){
    if (list.head === null) {
      list.head = makeNode(value);
      list.tail = list.head;
    } else {
      list.head.prev = makeNode(value);
      list.head.prev.next = list.head;
      list.head = list.head.prev;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    if (list.tail.prev) {
      list.tail = list.tail.prev;
      list.tail.next = null;
    } else {
      list.head = null;
      list.tail = null;
    }
    return oldTail.value;
  };

  list.removeHead = function(){
    var oldHead = list.head;
    if (list.head.next) { 
      list.head = list.head.next;
      list.head.prev = null; 
    } else {
      list.head = null;
      list.tail = null;
    }
    return oldHead.value;
  };

  list.contains = function(target){
    var current = list.head;
    while(current) {
      if (current.value === target) {
        return true;
      }  
      current = current.next;
    }
    return false;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
