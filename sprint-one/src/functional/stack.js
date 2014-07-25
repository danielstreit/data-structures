var makeStack = function(){
  var someInstance = {};

  var storage = {};
  var size = 0;

  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    size && size--;
    var result = storage[size];
    delete storage[size];
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};