const productsContainer = document.getElementById("products-container");
const url = "http://5fc82e232af77700165ad172.mockapi.io/api/products";

async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    loadData(data);
}

function loadData(data) {
    data.forEach((el) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");


        h3.innerText = el.name;
        img.src = el.image;
        p1.innerText = el.origin;
        p1.classList.add("country");
        p2.innerText = el.description;
        p3.innerText = el.presentation;
        p4.innerText = el.price;
        article.append(h3, img, p1, p2, p3, p4);
        productsContainer.appendChild(article);
        });
}

fetchData(url);
