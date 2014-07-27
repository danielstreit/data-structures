var makeTree = function(value, parent){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value, this));
};

treeMethods.contains = function(target){
  if (this.value === target) { return true; }
  return this.children.reduce(function(mem, el) {
    return mem || el.contains(target);
  }, false);
};

treeMethods.removeFromParent = function() {
  var i = this.parent.children.indexOf(this);
  this.parent.children.splice(i, 1);
  return this;
}