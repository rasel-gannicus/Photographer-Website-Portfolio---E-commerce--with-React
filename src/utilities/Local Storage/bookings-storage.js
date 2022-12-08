

function addToBookingDb(id){
    let bookings = JSON.parse(localStorage.getItem('booking') || '{}');
    if(bookings[id]){
        bookings[id] = bookings[id]  + 1;
    }else{
        bookings[id] = 1 ;
    }
    localStorage.setItem('booking', JSON.stringify(bookings));
}

function getBookingItems(){
    let bookings = JSON.parse(localStorage.getItem('booking') || '{}');
    return bookings;
}



export{
    addToBookingDb,
    getBookingItems
}