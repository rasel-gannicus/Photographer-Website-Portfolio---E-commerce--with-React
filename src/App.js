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
import { addToBookingDb } from './utilities/Local Storage/bookings-storage';

function App() {
  useEffect(()=>{
    
  },[])
  let [cart, setCart] = useCart();
  let [booking, setBooking] = useState([]);
  function handleAddToBooking(id) {
        addToBookingDb(id);
        let booked = [];
        booked = [...booking, id];
        setBooking(booked);
        console.log(id);
    }
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
