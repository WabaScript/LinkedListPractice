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

// *** All methods do NOT account for garbage cleanup, removal of nodes/entire list will result in orphan data ***
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
        // Keep track of list size
        this.size++
    };

    // Insert last node
    insertLastNode(value) {
        let node = new Node(value);
        let currentNode;
        // Edge case - if empty list, make it head
        if (!this.head) {
            this.head = node 
        // Traverse through list
        } else { 
            // Start with first node
            currentNode = this.head;
            // Go through list until last node's pointer is null
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // When you find the null pointer(end of list), assign new node to it
            currentNode.next = node;
        }
        // Keep track of list size
        this.size++
    }

    // Insert anywhere in between 
    inserAtIndex(value, index) {
        // Can't insert at an index out of range
        if (index > 0 && index > this.size) {
            return;
        }
        // Auto adjust for insert at first index
        if (index === 0) {
            this.insertFirstNode(value)
            return;
        }
        let currentNode, prevNode;
        const node = new Node(value);
        // Grab first node and start index
        currentNode = this.head;
        let count = 0;
        // If we want to insert at index 2, then we need to grab node at 1(prev node) and change next pointer
        while(count < index) {
            prevNode = currentNode; // Node before desired index
            count++; // Traverse
            currentNode = currentNode.next; // Node after index
        }
        // Take our new node and set its next pointer to the node AFTER our desired index
        node.next = currentNode;
        // Change the node at the index that comes before our desired index to now point to new node
        prevNode.next = node;
        // Keep track of list size
        this.size++;
    }

    // Get an index
    getAtIndex(index) {
        let currentNode = this.head;
        let count = 0;

        while (currentNode) {
            if (count == index) {
                console.log(`Value at index ${index}:`, currentNode.value);
            }
            count++;
            currentNode = currentNode.next;
        }
        // If its empty return nothing
        return null;
    }

    // Remove at Index *node will become orphan as still existing in memory*
    removeAtIndex(index) {
        // Make sure index is in range
        if (index > 0 && index > this.size - 1) {
            return;
        }
        // Grab head node
        let currentNode = this.head;
        let prevNode;
        let count = 0;
        // Removing the head node
        if (index === 0) {
            // Just take first node and set it to the node after
            this.head = currentNode.next
            // All other indicies
        } else {
            while (count < index) {
                count++;
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            // Assign previous node's next pointer to point to the node at removal's NEXT pointer
            prevNode.next = currentNode.next;
        }
        // Keep track of list size
        this.size--;
    }

    // Clear List, *will not clean up memory*
    clearList() {
        this.head = null;
        this.size = 0;
    }

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

// create a linked list
const ll = new LinkedList();
// Initial head
ll.insertFirstNode(100);
// New head node, with pointer to prev head(node)
ll.insertFirstNode(200);
// Insert new node at end of list
ll.insertLastNode(500);
// Insert new node at index 1
ll.inserAtIndex("interruption", 1);
// See all values in the linked list
ll.printListValue();
// Get value at index 2
ll.getAtIndex(2);
// Remove node at index 1
ll.removeAtIndex(1);
// Display updated list of values
ll.printListValue();
// Clear entire list
ll.clearList();

// console.log(ll)