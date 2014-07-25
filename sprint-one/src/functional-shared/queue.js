var makeQueue = function(){
  var queueInstance = {};
  _.extend(queueInstance, queueMethods);
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
  this._size && this._size--;
  var result = this._storage[0];
  for (var i = 0; i < this._size; i++) {
    this._storage[i] = this._storage[i + 1];
  }
  delete this._storage[this._size];
  return result;
};

queueMethods.size = function() {
  return this._size;
};

