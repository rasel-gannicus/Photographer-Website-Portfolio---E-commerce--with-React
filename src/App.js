import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes, useHref } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import BookingCart from './Pages/BookingCart/BookingCart';
import CartIconDisplay from './Pages/CartIconDisplay/CartIconDisplay';
import useCart from './utilities/Hooks/useCart';
import { useEffect, useState } from 'react';
import { addToBookingDb, decreaseFromDb, deleteFromDb, getBookingItems } from './utilities/Local Storage/bookings-storage';
import usePackages from './utilities/Hooks/usePackages';

function App() {

  const [packages, setPackages] = usePackages(); //--- this custom hook will get the data from API of 'Wedding and Portrait Packages'
  const [booking, setBooking] = useState([]); //--- it will be updated when user click Add to Booking

  let [cart, setCart] = useState([]); //--- it will get current local storage value
  useEffect(() => {
    let items = getBookingItems(); //--- extracting value from local storage
    let freshCart = [];
    for (let id in items) {
      let addedProduct = packages.find(index => index.id == id);
      if (addedProduct) {
        addedProduct.quantity = items[id];
        freshCart.push(addedProduct);
      }
      setCart(freshCart); //--- it will get current local storage value
    }
  }, [packages, booking]); //--- if user added new Booking(by 'Add to Booking' button), local storage will be updated immediately by this dependency.

  //--- this function have been passed to the 'Add To Booking' button in 'Wedding & Portrait Packages', So that when user add a package to cart, this function will be triggered. 
  function handleAddToBooking(id, qty) {
    addToBookingDb(id);
    if (qty == 4) {
      const popUpLimitMsg = document.querySelector('.popup-overLimit-msg');
      const popUpLimitMsgText = document.querySelector('.popup-overLimit-msg p');
      popUpLimitMsg.classList.add('active');
      popUpLimitMsgText.innerText = "Sorry we don't take Booking for more than 4 Days !";
      let x = setTimeout(() => {
        popUpLimitMsg.classList.remove('active');
      }, 2000);

    }
    let booked = [];
    booked = [...booking, id];
    setBooking(booked);
  }

  //--- this function will decrease the value from the booking cart
  function decreaseBooking(id) {
    decreaseFromDb(id);
    let booked = [];
    booked = [...booking, id];
    setBooking(booked);
  }
  function clearBookingAll() {
    deleteFromDb();
    window.location.reload();
    setBooking('');
  }

  //--- showing or hiding booking cart icon when cart is zero or not. if the Booking Cart icon is zero there will be no Cart Icon in the webpage. 
  useEffect(() => {
    let bookingCartNumberParent = document.querySelector('.booking-cart-display-parent');
    if (cart.length != 0) {
      bookingCartNumberParent.style.display = 'block';
    } else {
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
          <Route path='/bookingCart' element={<BookingCart
            cart={cart}
            handleAddToBooking={handleAddToBooking}
            decreaseBooking={decreaseBooking}
            clearBookingAll={clearBookingAll}
          ></BookingCart>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </div>
      <CartIconDisplay cart={cart}></CartIconDisplay>
      <div className="popup-overLimit-msg">
        <p>Sorry You have crossed the cart limit</p>
      </div>
    </div>
  );
}

export default App;
