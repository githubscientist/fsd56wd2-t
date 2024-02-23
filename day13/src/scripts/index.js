const menu = ['coffee', 'tea', 'sandwich', 'cake', 'cookie', 'rice', 'noodles', 'soup', 'salad', 'soda'];

const header = document.createElement('div');

const h1 = document.createElement('h1');
h1.textContent = 'Coffee Shop';

const p = document.createElement('p');
p.textContent = 'Our Coffee Shop is the best in town. We serve the best and a delicious menu.';

const ul = document.createElement('ul');

for (let i = 0; i < menu.length; i++){
    const item = document.createElement('li');
    item.textContent = menu[i];
    ul.appendChild(item);
}

header.append(h1, p, ul);
document.body.appendChild(header);