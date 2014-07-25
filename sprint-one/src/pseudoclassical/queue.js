var Queue = function() {
  this._storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function() {
  var result = this._storage[0];
  this._size && this._size--;
  for (var i = 0; i < this._size; i++) {
    this._storage[i] = this._storage[i + 1];
  }
  delete this._storage[this._size];
  return result;
};

Queue.prototype.size = function() {
  return this._size;
}


