// undirected graph
class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(name){
    this.adjacencyList[name] = [];
  }
}

var g = new Graph;
g.addVertex('Tokyo');
g.addVertex('San Francisco');
console.log(g);