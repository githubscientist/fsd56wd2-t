// console.log(window.location.hostname); // to get the hostname of the current URL

// console.log(window.location.href); // to get the full URL of the current page

// console.log(window.location);

// console.log(window.innerWidth); // to get the inner width of the window

// console.log(window.innerHeight); // to get the inner height of the window

// window.localStorage.setItem('email', 'sathish@gmail.com');
// window.localStorage.setItem('username', 'sathish');
// console.log(window.localStorage); // to get the local storage object

// console.log(window.localStorage.getItem('email')); // to get the value of the key from the local storage

// window.localStorage.removeItem('email'); // to remove the key from the local storage

// window.localStorage.clear(); // to clear the local storage

const recentSearches = [
    {
        title: 'laptops',
        similarSearches: ['laptops under 30000', 'laptops under 40000', 'laptops under 50000', 'best laptops', 'top 10 laptops brands']
    },
    {
        title: 'mobiles',
        similarSearches: ['mobiles under 10000', 'mobiles under 15000', 'mobiles under 20000', 'best mobiles', 'top 10 mobiles brands']
    },
    {
        title: 'headphones',
        similarSearches: ['headphones under 1000', 'headphones under 2000', 'headphones under 3000', 'best headphones', 'top 10 headphones brands']
    },
    {
        title: 'smartwatches',
        similarSearches: ['smartwatches under 5000', 'smartwatches under 10000', 'smartwatches under 15000', 'best smartwatches', 'top 10 smartwatches brands']
    },
    {
        title: 'cameras',
        similarSearches: ['cameras under 10000', 'cameras under 15000', 'cameras under 20000', 'best cameras', 'top 10 cameras brands']
    }
];

localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

let searches = JSON.parse(localStorage.getItem('recentSearches'));

console.log(searches);