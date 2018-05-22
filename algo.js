const BinaryTree = require("./classes.js");

// RandomInt returns a random integer beween min and max (both included)
// If min > max and min - max >= 2, same behaviour except that min and max are excluded
// If min > max and min - max == 1, RandomInt will return min
function RandomInt(min, max) {
	return (min + Math.floor(Math.random() * (max - min + 1)));
}

// Node is the root of the tree or the node getting checked recursively
// Node must be a non-null object with: value, left and right (both objects or null)
function DisplayTree(Node) {
	if (!Node)
		throw "Error: DisplayTree: Node must be a non-null object";
	console.log(Node.value);
	if (Node.left)
		DisplayTree(Node.left);
	if (Node.right)
		DisplayTree(Node.right);
}

// CreateRandomTree creates a random tree with random values, positions and number of nodes
// min_val and max_val are min and max values
// min_nodes and max_nodes are the min and max number of nodes
function CreateRandomTree() {
	const min_val = 0;
	const max_val = 100;
	const min_nodes = 1;
	const max_nodes = 10;
	const iter = RandomInt(min_nodes, max_nodes);
	let tree = new BinaryTree();

	for (let i = 0; i < iter; i++)
		tree.add(RandomInt(min_val, max_val));
	return (tree);
}

// node is the root of the tree or the node getting checked recursively
// node must be a non-null object with: value, left and right (both objects or null)
// If node is null, returns 0

const GetMax = (node, max = (node ? node.value : 0)) => !node ? max : Math.max(node.value, GetMax(node.right, max), GetMax(node.left, max));

const RandomTree = CreateRandomTree();
let HandmadeTree = new BinaryTree();

// Manually putting values in HandmadeTree
HandmadeTree.add(-5);
HandmadeTree.add(-2);
HandmadeTree.add(-7);
HandmadeTree.add(-3);

console.log("Listing values of the random tree:");
DisplayTree(RandomTree.root);
console.log("The max value of the random tree is " + GetMax(RandomTree.root));
console.log("Listing values of the handmade tree:");
DisplayTree(HandmadeTree.root);
console.log("The max value of the handmade tree is " + GetMax(HandmadeTree.root));
