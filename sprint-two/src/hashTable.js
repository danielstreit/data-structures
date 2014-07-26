var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
  this.maxLoadFactor = .75;
  this.expandRate = 2;
  this.minLoadFactor = .25;
  this.collapseRate = .5;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // If the bucket for this index has not been initialized, initialize it
  if (this._storage.get(i) === undefined) {
    this._storage.set(i, []);
  }

  // If the key already exists, override and return the value
  this._storage.get(i).forEach(function(kvPair) {
    if (kvPair[0] === k) {
      kvPair[1] = v;
      return v;
    }
  });

  // If the key is not already in the hashtable, insert and return it
  this._storage.get(i).push([k, v]);
  ++this._size / this._limit > this.maxLoadFactor && this._rehash(this.expandRate);
  return v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket) {
    for (var j = 0; j < bucket.length; j++) {
      if (bucket[j][0] === k) {
        return bucket[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bIndex;
  this._storage.get(i).forEach(function(kvPair, index, bucket) {
    if (kvPair[0] === k) {
      bIndex = index;
    }
  });
  this._storage.get(i).splice(bIndex, 1);
  --this._size / this._limit < this.minLoadFactor && this._rehash(this.collapseRate);
};

HashTable.prototype._rehash = function(resize) {
  this._limit = this._limit * resize;
  this._size = 0;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);
  oldStorage.each(function(bucket) {
    bucket && bucket.forEach(function(kvPair) {
      this.insert(kvPair[0], kvPair[1]);
    }.bind(this));
  }.bind(this));
}