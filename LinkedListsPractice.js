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