var makeQueue = function() {
  var queueInstance = Object.create(queueMethods);
  queueInstance._storage = {};
  queueInstance._size = 0;
  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

queueMethods.dequeue = function() {
  var result = this._storage[0];
  this._size && this._size--;
  for (var i = 0; i < this._size; i++) {
    this._storage[i] = this._storage[i + 1];
  }
  delete this._storage[this._size];
  return result;
};

queueMethods.size = function() {
  return this._size;
}
