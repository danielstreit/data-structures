var BinarySearchTree = function(value, parent){
  this.value = value;
  this.parent = parent || null;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    this.left ? this.left.insert(value) : this.left = new BinarySearchTree(value, this);
  } else {
    this.right ? this.right.insert(value) : this.right = new BinarySearchTree(value, this);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) { return true; }
  return (!!this.left && this.left.contains(value)) ||
    (!!this.right && this.right.contains(value));
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};

BinarySearchTree.prototype.breadthFirstLog = function(callback) {
  var queue = [];
  queue.push(this);
  while (queue.length) {
    var current = queue.shift();
    callback(current.value);
    current.left && queue.push(current.left);
    current.right && queue.push(current.right);    
  }
}