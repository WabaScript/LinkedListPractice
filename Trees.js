function Node(data) {
    this.data = data;
    this.children = [];
}

class Tree {
    constructor() {
        this.root = null;
    }
    // find where to add node
    add(data, toNodeData){
        const node = new Node(data);

        const parent = toNodeData && this.findBFS(toNodeData);
        if (parent) {
            parent.children.push(node)
        } else {
            if (!this.root) {
                this.root = node;
            } else {
                return "Root already exists!"
            }
        }
    }

    findBFS(data) {
        const queue = [this.root];
        let node = null;

        this.traverseBFS((node) => {
            if (node.data == data) {
                _node = node;
            }
        })

        return _node;
    }

    traverseBFS(cb) {
        const queue = [this.root];

        if (cb) {
            while (queue.length) {
                const node = queue.shift();

                cb(node);

                for (const child of node.children) {
                    queue.push(child);
                }
            }
        }
    }
}