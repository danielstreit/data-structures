var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    size && size--;
    var result = storage[0];
    for (var i = 0; i < size; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[size];
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
