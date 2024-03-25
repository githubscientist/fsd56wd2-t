// closure -> enables the function to remember the variables that are declared outside the function

// closure example
function outer() {
    let outerVar = 10;

    function inner() {
        console.log(outerVar);
    }

    return inner;
}

let innerFn = outer();
innerFn(); // 10