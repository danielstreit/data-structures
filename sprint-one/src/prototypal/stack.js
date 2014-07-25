var makeStack = function() {
  var stackInstance = Object.create(stackMethods);
  stackInstance._storage = {};
  stackInstance._size = 0;
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

stackMethods.size = function() {
  return this._size;
}


