const products = [
    {
        image: '/assets/images/walton1.png',
        name: 'Walton Cycle 1',
        model: 'XXX',
        price: 'XXX',
        brand: 'walton'
    },
    {
        image: '/assets/images/walton2.png',
        name: 'Walton Cycle 2',
        model: 'XXX',
        price: 'XXX',
        brand: 'walton'
    },
    {
        image: '/assets/images/phoenix1.png',
        name: 'Phoenix Cycle 1',
        model: 'XXX',
        price: 'XXX',
        brand: 'phoenix'
    },
    {
        image: '/assets/images/phoenix2.png',
        name: 'Phoenix Cycle 2',
        model: 'XXX',
        price: 'XXX',
        brand: 'phoenix'
    }
];

let currentProductIndex = 0;
let filteredProducts = products;

const productImage = document.querySelector('.product-image img');
const productName = document.querySelector('.product-name');
const productModel = document.querySelector('.product-model');
const productPrice = document.querySelector('.product-price');
const productDetails = document.querySelector('.product-details');
const productImageContainer = document.querySelector('.product-image');

function showProduct(index) {
    productDetails.classList.remove('fade-in');

    setTimeout(() => {
        productImage.src = filteredProducts[index].image;
        productName.textContent = filteredProducts[index].name;
        productModel.textContent = `Model: ${filteredProducts[index].model}`;
        productPrice.textContent = `Price: ${filteredProducts[index].price}`;
        productDetails.classList.add('fade-in');
    }, 10);
}

function plusSlides(n) {
    productImageContainer.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
    productImageContainer.style.transform = `translateX(${n > 0 ? '-100%' : '100%'})`;
    productImageContainer.style.opacity = 0;

    setTimeout(() => {
        currentProductIndex += n;
        if (currentProductIndex >= filteredProducts.length) {
            currentProductIndex = 0;
        }
        if (currentProductIndex < 0) {
            currentProductIndex = filteredProducts.length - 1;
        }

        showProduct(currentProductIndex);

        productImageContainer.style.transition = 'none';
        productImageContainer.style.transform = `translateX(${n > 0 ? '100%' : '-100%'})`;

        setTimeout(() => {
            productImageContainer.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            productImageContainer.style.transform = 'translateX(0)';
            productImageContainer.style.opacity = 1;
        }, 20);

    }, 500);
}

function filterProducts(brand) {
    productImageContainer.style.transition = 'none';
    productImageContainer.style.transform = 'translateX(0)';
    productImageContainer.style.opacity = 1;

    if (brand === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.brand === brand);
    }
    currentProductIndex = 0;
    showProduct(currentProductIndex);
}

showProduct(currentProductIndex);