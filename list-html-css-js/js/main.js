const products = [
    {
        name: 'Cadeira',
        price: 'R$120,00',
        description: 'Cadeira de madeira',
        evaluate:'Boa'
    },

    {
        name: 'Mesa',
        price: 'R$220,00',
        description: 'Mesa de madeira',
        evaluate:'ótima mesa'
    },

    {
        name: 'Fone de ouvido',
        price: 'R$350,00',
        description: 'Fone de ouvido gamer',
        evaluate:'Som muito bom'
    },

    {
        name: 'Tv - Smart',
        price: 'R$2000,00',
        description: 'TV smar LED',
        evaluate:'Boa'
    }

]

/*DOM é basicamente a arvore de elementos do HTML, por exemplo o document*/
const listProducts = document.getElementById("product-list");


products.forEach((product, index) => {
    const productItem = document.createElement('li');
    productItem.classList.add("product-item");

    const productName = document.createElement('p');
    productName.textContent =product.name;
    productItem.appendChild(productName);

    const productPrice = document.createElement('p');
    productPrice.textContent =product.price;
    productItem.appendChild(productPrice);
    

    const productDescription = document.createElement('p');
    productDescription.textContent =product.description;
    productItem.appendChild(productDescription);

    const productEvaluate = document.createElement('p');
    productEvaluate.textContent =product.evaluate;
    productItem.appendChild(productEvaluate);

    listProducts.appendChild(productItem);

});
