'use strict';

// import React, { useState } from 'react';

// Vertex = Node
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// was trying to use functional components and got lost. Maybe in class we could go over how this would have worked?
// const Vertex = (props) => {
//   const [ value ] = useState('');
//   return (
//     <div>
//       <p>Value is: {value}</p>
//     </div>
//   );
// }

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    //this.startNode;
    //this.endNode;
    this.weight = weight;
  }
}

// const Edge = (vertex, weight) => {
//   const [ vertex, weight ] = useState('');
//   return (
//     <div>
//       <p>Vertex is: {vertex}</p>
//       <p>Weight is: {weight}</p>
//     </div>
//   );
// }

class Graph {
  constructor() {
    // why use a Map?
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    this.adjacencyList = new Map();
  }

  // const Graph = () => {
  //   const adjacencyList = useState('');
  //   return (
  //     <div className='lists'>
  //       {adjacencyList.map((list) => (
  //         <div className='list'>{list}</div>
  //       ))}
  //     </div>
  //   );
  // };

  addVertex(value) {
    // - Arguments: value
    // - Returns: The added node
    let vertex = new Vertex(value);
    // - Add a node to the graph
    this.adjacencyList.set(vertex, []);
  }

  // adds a directional edge
  addEdge(node1, node2) {
    // - Arguments: 2 nodes to be connected by the edge, weight (optional)
    // - Returns: nothing
    // - Adds a new edge between two nodes in the graph
    // - If specified, assign a weight to the edge
    // - Both nodes should already be in the Graph
    // here is how you get a node from the adjacencyList
    const adjacancies = this.adjacencyList.get(node1);
    adjacancies.push(new Edge(node2, 2));
  }

  getVertices() {
    // - Arguments: none
    // - Returns all of the nodes in the graph as a collection (set, list, or similar)
  }

  getNeighbors(node) {
    // - Arguments: node
    // - Returns a collection of edges connected to the given node
    // - Include the weight of the connection in the returned collection
  }

  size() {
    // - Arguments: none
    // - Returns the total number of nodes in the graph
  }

  /*
  ALGORITHM BreadthFirst(vertex)
  DECLARE nodes <-- new List()
  DECLARE breadth <-- new Queue()
  DECLARE visited <-- new Set()

  breadth.Enqueue(vertex)
  visited.Add(vertex)

  while (breadth is not empty)
      DECLARE front <-- breadth.Dequeue()
      nodes.Add(front)

      for each child in front.Children
          if(child is not visited)
              visited.Add(child)
              breadth.Enqueue(child)

  return nodes;
  */

  bfs(startNode) {
    const queue = [];
    const visitedVertices = new Set();

    queue.push(startNode);
    visitedVertices.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedVertices.has(neighborNode)) {
          continue;
        } else {
          visitedVertices.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    console.log('visitedNodes', visitedVertices);
    return;
  }

  dfs(startNode) {
    // Referenced from freecode camp https://www.freecodecamp.org/news/8-essential-graph-algorithms-in-javascript/
    /*
      Push the root node into the stack
      Start a while loop while the stack is not empty
      Peek at the top node in the stack
      If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
      If the top node does not have any unvisited children, Pop that node off the stack
      repeat until the stack is empty.
    */
    const result = [];
    const stack = [startNode];
    const visitedVertices = new Set();
    visitedVertices[startNode] = true;
    while (stack.length) {
      const currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
