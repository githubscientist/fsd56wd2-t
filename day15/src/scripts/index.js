let tweet = document.getElementById('tweet');
let charCount = document.getElementById('charCount');

tweet.addEventListener('input', function () {
    console.log(event.target.value);
    let message = event.target.value;
    charCount.textContent = `${message.length}`;
});

charCount.style.color = 'red';

tweet.addEventListener('focusin', function () {
    tweet.style.outline = '1px solid blue';
});

tweet.addEventListener('focusout', function () {
    tweet.style.outline = '1px solid #29A6EB';
});