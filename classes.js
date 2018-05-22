function RandomInt(min, max) {
	return (min + Math.floor(Math.random() * (max - min + 1)));
}

class Node {
	constructor (val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

module.exports = class BinaryTree{
	constructor () {
		this.root = null;
	}
	add (val, node) {
		if (!node)
			node = this.root;
		if (!this.root) {
			this.root = new Node(val);
			return;
		}
		const side = RandomInt(0, 1);
		if (side == 0) {
			if (!node.left)
				node.left = new Node(val);
			else
				this.add(val, node.left);
		} else {
			if (!node.right)
				node.right = new Node(val);
			else
				this.add(val, node.right);
		}
	}
}
