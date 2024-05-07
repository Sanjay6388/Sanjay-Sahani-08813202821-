const displayProduct = () => {
    const productName = document.getElementById('productName');
    const price = document.getElementById('price');
    const rating = document.getElementById('rating');
    const discount = document.getElementById('discount');
    const availability = document.getElementById('availability');

    fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data && data.length > 0) {
           
            const product = data[0];
            productName.innerHTML = product.productName || 'Unknown';
            price.innerHTML = product.price || 'Unknown';
            rating.innerHTML = product.rating || 'Unknown';
            discount.innerHTML = product.discount || 'Unknown';
            availability.innerHTML = product.availability || 'Unknown';
        } else {
            console.warn('No products found');
            productName.innerHTML = 'Not available';
            price.innerHTML = 'Not available';
            rating.innerHTML = 'Not available';
            discount.innerHTML = 'Not available';
            availability.innerHTML = 'Not available';
        }
    })
    .catch(err => {
        console.error('Error fetching product data:', err);
        productName.innerHTML = 'Error';
        price.innerHTML = 'Error';
        rating.innerHTML = 'Error';
        discount.innerHTML = 'Error';
        availability.innerHTML = 'Error';
    });
};

displayProduct();