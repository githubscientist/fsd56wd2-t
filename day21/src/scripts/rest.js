// spread: array into individual elements
// rest: individual elements into array

function sum(...nums) {
    // let total = 0;

    // nums.forEach(num => total += num);

    // return total;

    return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));