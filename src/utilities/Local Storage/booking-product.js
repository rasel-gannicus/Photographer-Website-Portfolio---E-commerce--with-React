

function addProductToCart(id) {
    const bookings = JSON.parse(localStorage.getItem('photo-product') || '{}');
    if (bookings[id]) {
        bookings[id] = bookings[id] + 1;
    } else {
        bookings[id] = 1;
    }
    localStorage.setItem('photo-product', JSON.stringify(bookings));
}

function getProductFromCart() {
    const bookings = JSON.parse(localStorage.getItem('photo-product') || '{}');
    return bookings;
}

function decreaseProductFromCart(id) {
    const bookings = JSON.parse(localStorage.getItem('photo-product') || '{}');
    if (bookings[id] >=2 ) {
        bookings[id] = bookings[id] - 1;
    }
    localStorage.setItem('photo-product', JSON.stringify(bookings));
}

function deleteProductFromCart(id){
    const bookings = JSON.parse(localStorage.getItem('photo-product') || '{}');
    if (bookings[id]) {
        delete bookings[id];
    }
    localStorage.setItem('photo-product', JSON.stringify(bookings));
}

export {
    addProductToCart,
    getProductFromCart,
    decreaseProductFromCart,
    deleteProductFromCart
}