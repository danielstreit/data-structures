var Graph = function(){
  this._nodes = [];
  this._edges = [];
};

Graph.prototype.addNode = function(newNode, toNode){
  this._nodes.push(newNode);
  toNode && this.addEdge(newNode, toNode);
  this._nodes.length === 2 && this.addEdge(this._nodes[0], newNode);
};

Graph.prototype.contains = function(node){
  return this._nodes.indexOf(node) !== -1;
};

Graph.prototype.removeNode = function(node){
  var removed = this._nodes.splice(this._nodes.indexOf(node), 1)[0];
  var edgesToRemove = [];
  this._edges.forEach(function(edge) {
    if (edge[0] === node || edge[1] === node) {
      edgesToRemove.push(edge);
    }
  });
  edgesToRemove.forEach(function(edge) {
    this.removeEdge(edge[0], edge[1]);
  }.bind(this));
};

Graph.prototype.getEdge = function(fromNode, toNode){
  for (var i = 0; i < this._edges.length; i++) {
    if (this._edges[i][0] === fromNode &&
        this._edges[i][1] === toNode) {
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this.getEdge(fromNode, toNode)) {
    this._edges.push([fromNode, toNode]);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = -1;
  this._edges.forEach(function(edge, i, edges) {
    if (edge[0] === fromNode &&
        edge[1] === toNode)
      index = i;
  });
  index !== -1 && this._edges.splice(index, 1);
  this._purge();
};

Graph.prototype.forEachNode = function(callback) {
  this._nodes.forEach(callback);
}

// Check if any nodes are not connected and remove them
Graph.prototype._purge = function() {
  var connected = [];
  this._edges.forEach(function(edge) {
    edge.forEach(function (node) {
      connected.push(node);
    });
  });
  this._nodes = _.unique(connected);
};
