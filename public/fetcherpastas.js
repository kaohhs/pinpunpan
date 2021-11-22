const productopasta = document.getElementById("productopasta");
const url = "https://619967319022ea0017a7ae59.mockapi.io/Pastas";


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


        h3.innerText = el.pastaname;
        img.src = el.pastaimagen;
        p1.innerText = el.pastaprocedencia;
        p1.classList.add("country");
        p2.innerText = el.pastadescripcion;
        p3.innerText = el.pastapresentacion;
        p4.innerText = el.pastaprecio;
        article.append(h3, img, p1, p2, p3, p4);
        productsContainer.appendChild(article);
        });
}

fetchData(url);
