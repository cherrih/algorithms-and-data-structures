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
    let newV1 = [];
    let newV2 = [];
    for (let i = 0; i < this.adjacencyList[v1].length; i ++) {
      if (this.adjacencyList[v1][i] === v2){
        newV1 = [...this.adjacencyList[v1].slice(0,i), ...this.adjacencyList[v1].slice(i + 1)];
        break;
      }
    }
    for (let i = 0; i < this.adjacencyList[v2].length; i ++) {
      if (this.adjacencyList[v2][i] === v1){
        newV2 = [...this.adjacencyList[v2].slice(0,i), ...this.adjacencyList[v2].slice(i + 1)];
        break;
      }
    }
    this.adjacencyList[v1] = newV1;
    this.adjacencyList[v2] = newV2;
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