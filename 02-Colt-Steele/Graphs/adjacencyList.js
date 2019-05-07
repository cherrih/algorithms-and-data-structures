// undirected graph
class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(name){
    this.adjacencyList[name] = [];
  }
  addEdge(v1, v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

var g = new Graph;
g.addVertex('Tokyo');
g.addVertex('San Francisco');
console.log(g);
g.addEdge('Tokyo', 'San Francisco');
console.log(g);