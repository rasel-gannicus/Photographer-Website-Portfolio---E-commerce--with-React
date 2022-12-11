

function addProductToCart(id){
    const bookings = JSON.parse(localStorage.getItem('photo-product') || '{}');
    if(bookings[id]){
        bookings[id] = bookings[id] + 1;
    }else{
        bookings[id] = 1 ;
    }
    localStorage.setItem('photo-product', JSON.stringify(bookings));
}


export {
    addProductToCart
}