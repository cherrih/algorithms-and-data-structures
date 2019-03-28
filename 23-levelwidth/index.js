// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// root is a node
function levelWidth(root) {
  // BF traversal
  const counters = [0];
  const arr = [root, 's'];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 's') {
      arr.push(node);
      counters.push(0);
    } else {
      arr.push(...node.children);
      counters[counters.length - 1] += 1;
    }
  }
  return counters;
}

module.exports = levelWidth;
