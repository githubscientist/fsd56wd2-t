class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        this.items.pop();
        this.top--;
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        return this.items[this.top];
    }
}

function isBalanced(expression) {
    // create an empty stack
    let stack = new Stack();

    // traverse or loop through expression
    for (let bracket of expression) {
        // check if its a open parantheses
        if (bracket === '(') {
            // if true, push it to the stack
            stack.push(bracket);
        } else {
            // its a closing bracket
            // if stack is empty, return false
            if (stack.isEmpty()) {
                return false;
            } else {
                // pop the stack
                stack.pop();
            }
        }
    }

    return stack.isEmpty();
}


let expression = '(()(()))';

if (isBalanced(expression)) {
    console.log('balanced');
} else {
    console.log('unbalanced');
}