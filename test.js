class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// depthfirst traversal
//metho 1-iterative
const depthFirstValues = (root) => {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.val);
    console.log(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};

depthFirstValues(a);

//metho 2 - recursive
const depthFirstValuess = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValuess(root.left);
  const rightValues = depthFirstValuess(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

console.log(depthFirstValuess(a));

// breadth first traversal
const breadthfirstvalue = (root) => {
  if (root === null) return [];

  const values = [];

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    values.push(current.val);
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }
  return values;
};

console.log(breadthfirstvalue(a));
