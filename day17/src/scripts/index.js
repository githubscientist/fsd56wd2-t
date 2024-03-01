let pages = [
    {
        "id": "1",
        "name": "Lura Senger",
        "email": "Xander_Collier@yahoo.com"
    },
    {
        "id": "2",
        "name": "Wilburn Weber",
        "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
        "id": "3",
        "name": "Tyrique Hahn",
        "email": "Juston.Altenwerth@yahoo.com"
    },
    {
        "id": "4",
        "name": "Lenny Bailey",
        "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
        "id": "5",
        "name": "Vladimir Keeling",
        "email": "Louisa_Walsh18@hotmail.com"
    }
];

let pagination = document.querySelector('.pagination');

let currentPage = 1;

pages.forEach(page => {
    let pageLink = document.createElement('a');
    pageLink.href = `#${page.id}`;
    pageLink.textContent = `${page.id}`;

    pageLink.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = Number(page.id);
        console.log(currentPage);

        // set the active class
        pageLink.classList.add('active');

    });

    pagination.appendChild(pageLink);
});

let next = document.createElement('a');
next.href = `#`;
next.textContent = `Next`;

next.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage++;
    console.log(currentPage);
});

pagination.appendChild(next);