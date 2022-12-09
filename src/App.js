import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import BookingCart from './Pages/Home/MyServices/BookingCart/BookingCart';
import CartIconDisplay from './Pages/CartIconDisplay/CartIconDisplay';
import useCart from './utilities/Hooks/useCart';
import { useEffect, useState } from 'react';
import { addToBookingDb, getBookingItems } from './utilities/Local Storage/bookings-storage';
import usePackages from './utilities/Hooks/usePackages';

function App() {

  const [packages, setPackages] = usePackages();
  const [booking, setBooking] = useState([]);

  let [cart, setCart] = useState([]);
  useEffect(() => {
    let items = getBookingItems();
    let freshCart = [];
    for (let id in items) {
      let addedProduct = packages.find(index => index.id == id);
      if (addedProduct) {
        addedProduct.quantity = items[id];
        freshCart.push(addedProduct);
      }
      setCart(freshCart);
    }
  }, [packages, booking]);

  function handleAddToBooking(id) {
    addToBookingDb(id);
    let booked = [];
    booked = [...booking, id];
    setBooking(booked);
  }

  // showing or hiding booking cart icon when cart is zero or not.
  useEffect(() => {
    let bookingCartNumber = document.querySelector('.booking-cart-number');
    let bookingCartNumberParent = document.querySelector('.booking-cart-display-parent');
    if(cart.length != 0){
        bookingCartNumberParent.style.display = 'block';
    }else{
        bookingCartNumberParent.style.display = 'none';
    }
}, [booking, cart]);
  return (
    <div className="App">
      <Header></Header>
      <div className="app-div">
        <Routes>
          <Route path='/' element={<Home handleAddToBooking={handleAddToBooking}></Home>}></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/bookingCart' element={<BookingCart></BookingCart>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </div>
      <CartIconDisplay cart={cart}></CartIconDisplay>
    </div>
  );
}

export default App;
