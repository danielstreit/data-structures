var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// Add an item to the set, return true if successful, false if item is already in the set
setPrototype.add = function(item){
  return this.contains(item) ? false : !!this._storage.push(item);
};

// Return true if the given item is in the set, otherwise false
setPrototype.contains = function(item){
  return this._storage.indexOf(item) !== -1;
};

// Returns true if the item is in the set and removes it, false if item is not in set
setPrototype.remove = function(item){
  var i = this._storage.indexOf(item);
  return i === -1 ? false : !!this._storage.splice(i, 1);
};
