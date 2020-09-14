// Linked List Advanced Practice
// Singly-linked lists are already defined with this interface:
//  function ListNode(x) {
//      this.value = x;
//      this.next = null;
//  }

// Given k, in a linked list, l, remove all elements equal to k.
function removeKFromList(l, k) {
    let newHead = new ListNode(null);
    newHead.next = l;
    let current = newHead;
    while (current) {
        while(current.next && current.next.value == k){
            current.next = current.next.next
        }
        current = current.next
    }
    return newHead.next;
}

// Check if Linked List is a Palindrome
// Stack Method
function isListPalindrome(l) {
	let stack = [];
    let current = l;
    // Create a Stack (FILO)
    while(current) {
        stack.push(current.value)
        current = current.next
    }
    // Stack should now be reversed list, check
    current = l;
    while (current) {
        if (stack.pop() != current.value) {
            return false;
        }
        current = current.next
    }
    return true;
}


