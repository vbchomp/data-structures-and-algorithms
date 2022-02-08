
// tree class and instance from https://dev.to/ggenya132/depth-first-traversal-in-javascript-3ehp
class Tree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let tree = new Tree(
  1,
  new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),
  new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))
);

const graphDepthFirst = (node) => {
  let values = [];
  let current = node;
  function _walk(node) {
    if (node !== undefined) {
      values.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    }
  }
  _walk(current);
  return values;
};
graphDepthFirst(tree, console.log);

// testing
describe('depth first graph', () => {
  it('instantiate a new tree', () => {
    let tree = new Tree(1, new Tree(2, new Tree(4, new Tree(8)), new Tree(5)),
      new Tree(3, new Tree(6, new Tree(9), new Tree(10)), new Tree(7))
    );
    expect(node).toNotBeNull();
    expect(node.left).toEqual(2);
  });
});
