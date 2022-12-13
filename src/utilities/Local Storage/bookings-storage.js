

function addToBookingDb(id) {
    let bookings = JSON.parse(localStorage.getItem('booking') || '{}');
    if (bookings[id]) {
        if (bookings[id] < 4) {
            bookings[id] = bookings[id] + 1;
        }
    } else {
        bookings[id] = 1;
    }
    localStorage.setItem('booking', JSON.stringify(bookings));
}

function getBookingItems() {
    let bookings = JSON.parse(localStorage.getItem('booking') || '{}');
    return bookings;
}

function decreaseFromDb(id) {
    let bookings = JSON.parse(localStorage.getItem('booking') || '{}');
    if (bookings[id]) {
        bookings[id] = bookings[id] - 1;
    }
    let size = Object.keys(bookings).length;
    if (size == 1) {
        if (bookings[id] <= 0) {
            delete bookings[id];
            window.location.reload();
        }
    }
    if(bookings[id]<=0){
        delete bookings[id];
    }
    
    // console.log(Object.keys(bookings).length)
    localStorage.setItem('booking', JSON.stringify(bookings));
}

function deleteFromDb() {
    localStorage.removeItem('booking');
}



export {
    addToBookingDb,
    getBookingItems,
    deleteFromDb,
    decreaseFromDb
}