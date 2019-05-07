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
  removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
}

var g = new Graph;
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Dallas');
g.addEdge('Tokyo', 'San Francisco');
g.addEdge('San Francisco', 'Dallas');
console.log(g);
g.removeEdge('San Francisco', 'Dallas');
console.log(g);