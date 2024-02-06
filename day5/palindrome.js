// String Reverse: Algorithms

// let numbers = [1, 2, 3, 4, 5];

// numbers.reverse();

// console.log(numbers);

// let word = 'welcome';

// Method 1
// console.log(str.split('').reverse().join(''));

// Method 2
// let reverse = '';

// for (let index = word.length - 1; index >= 0; index--){
//     reverse = reverse + word[index];
// }

// console.log(reverse);

// Method 3
// let wordArray = word.split('');

// let first = 0;
// let last = wordArray.length - 1;

// while (first < last) {
//     let temp = wordArray[first];
//     wordArray[first] = wordArray[last];
//     wordArray[last] = temp;

//     first++;
//     last--;
// }

// console.log(wordArray.join(''));

// Palindrome Algorithms
// function isPalindrome(word) {
//     let reverse = '';

//     for (let index = word.length - 1; index >= 0; index--){
//         reverse = reverse + word[index];
//     }

//     return word === reverse;
// }


// let words = ['malayalam', 'welcome', 'madam', 'god']

// for (let word of words) {
//     if (isPalindrome(word)) {
//         console.log(word);
//     }
// }

console.log((function (words) {
    let palindromes = [];
    for (let word of words) {
        let reverse = '';

        for (let index = word.length - 1; index >= 0; index--) {
            reverse = reverse + word[index];
        }

        if (word === reverse) {
            palindromes.push(word);
        }
    }

    return palindromes;
})(['malayalam', 'welcome', 'madam', 'god']));