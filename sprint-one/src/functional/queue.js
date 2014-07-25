var makeQueue = function(){
  var someInstance = {};

  var storage = {};
  var size = 0;

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
