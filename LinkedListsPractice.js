// Why use a Linked List? 
// A linked list is a linear data structure that consists of structs, Nodes, which are linked
// to one another via pointers.
// Node consists of the value(any data type) you wish to store and a reference(pointer)
// A linked list trumps arrays in it's dynamic efficiency. 
// They are resizable and performant in insertion and deletion.
// However, cons include slow reads(not sequential in memory, aka,you must traverse to find) and takes up more space(storage).

// Simple example: 
// Create two nodes, JS object literals

// const node1 = {
//     value: 100
// }
// const node2 = {
//     value: 200
// }
// Then reference the second inside the first node
// node1.next = node2;
// console.log(node1);

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
};

// const node1 = new Node(100);
// console.log(node1)

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Insert first node
    insertFirstNode(value) {
        // Here we reassign the LinkedList head to a new node
        // Initially this will insert node, and point to null since it is only node
        this.head = new Node(value, this.head);
        // When assigning a new head, the next pointer value will actually
        // use the previous head node as its "next" reference
        // Thus everytime we insert new head nodes, old nodes are pushed down
    }

    // Insert last node

    // Insert anywhere in between

    // Get an index

    // Remove at Index

    // Clear List

    // Print list values
    printListValue() {
        // look at first node
        let currentNode = this.head;
        // loop through by changing currentnode to the next node, until there is a pointer to null
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        };
    };
};

const ll = new LinkedList();
// Initial head
ll.insertFirstNode(100);
// New head node, with pointer to prev head(node)
ll.insertFirstNode(200)
console.log(ll)
// 
ll.printListValue();