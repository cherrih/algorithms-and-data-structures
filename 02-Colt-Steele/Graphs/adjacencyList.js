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
  removeVertex(name){
    this.adjacencyList[name].forEach(edge => {
      this.removeEdge(name, edge);
    })
    delete this.adjacencyList[name];
  }
  dfsRecursive(node){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    const dfs = (v) => {
      if (!v){
        return null;
      }
      result.push(v);
      visited[v] = true;
      adjacencyList[v].forEach(neighbor => {
        if (!visited[neighbor]){
          return dfs(neighbor);
        }
      })
    }
    dfs(node);
    return result;
  }
  dfsIterative(node){
    const visited = {};
    const result = [];
    const s = [node];
    let vertex;
    visited[node] = true;
    while (s.length) {
      vertex = s.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach(n => {
        if (!visited[n]) {
          visited[n] = true;
          s.push(n);
        }
      })
    }
    return result;
  }
}

var g = new Graph;
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.dfsRecursive('A'));
console.log(g.dfsIterative('A'));
