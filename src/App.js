import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import { Route, Routes, useHref } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import BookingCart from "./Pages/BookingCart/BookingCart";
import CartIconDisplay from "./Pages/CartIconDisplay/CartIconDisplay";
import useCart from "./utilities/Hooks/useCart";
import { useEffect, useState } from "react";
import {
  addToBookingDb,
  decreaseFromDb,
  deleteFromDb,
  getBookingItems,
} from "./utilities/Local Storage/bookings-storage";
import usePackages from "./utilities/Hooks/usePackages";
import Shop from "./Pages/Shop/Shop";
import {
  addProductToCart,
  decreaseProductFromCart,
  deleteProductFromCart,
  getProductFromCart,
} from "./utilities/Local Storage/booking-product";
import useProduct from "./utilities/Hooks/useProduct";
import ProductCart from "./ProductCart/ProductCart";
import Footer from "./Pages/Footer/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Wishlist from "./Pages/Wishlist/Wishlist";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import RequireAuth2 from "./Pages/RequireAuth2/RequireAuth2";

function App() {
  const [packages, setPackages] = usePackages(); //--- this custom hook will get the data from API of 'Wedding and Portrait Packages'
  const [booking, setBooking] = useState([]); //--- it will be updated when user click Add to Booking

  let [cart, setCart] = useState([]); //--- it will get current local storage value
  useEffect(() => {
    let items = getBookingItems(); //--- extracting value from local storage
    let freshCart = [];
    for (let id in items) {
      let addedProduct = packages.find((index) => index.id == id);
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
      const popUpLimitMsg = document.querySelector(".popup-overLimit-msg");
      const popUpLimitMsgText = document.querySelector(
        ".popup-overLimit-msg p"
      );
      popUpLimitMsg.classList.add("active");
      popUpLimitMsgText.innerText =
        "Sorry we don't take Booking for more than 4 Days !";
      let x = setTimeout(() => {
        popUpLimitMsg.classList.remove("active");
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
    setBooking("");
  }

  //--- showing or hiding booking cart icon when cart is zero or not. if the Booking Cart icon is zero there will be no Cart Icon in the webpage.
  useEffect(() => {
    let bookingCartNumberParent = document.querySelector(
      ".booking-cart-display-parent-one"
    );
    if (cart.length != 0) {
      bookingCartNumberParent.style.display = "block";
    } else {
      bookingCartNumberParent.style.display = "none";
    }
  }, [booking, cart]);

  // -----------------------  all 'Product buy and add to cart' Functionality start from here

  // this function will add product to local storage
  let [product, setProduct] = useProduct();
  let [toggle, setToggle] = useState([]);

  function addProduct(element) {
    let freshCart = [];
    addProductToCart(element);
    freshCart = [...toggle, element];
    setToggle(freshCart);
  }
  function decreaseProduct(id) {
    let freshCart = [];
    decreaseProductFromCart(id);
    freshCart = [...toggle, id];
    setToggle(freshCart);
  }

  let [basket, setBasket] = useState([]);
  useEffect(() => {
    let cartValue = getProductFromCart();
    let newCart = [];
    for (let id in cartValue) {
      let addedProduct = product.find((index) => index.img == id);
      if (addedProduct) {
        addedProduct.quantity = cartValue[id];
        newCart.push(addedProduct);
      }
      setBasket(newCart);
    }
  }, [product, toggle]);

  function deleteProduct(id) {
    deleteProductFromCart(id);
    let freshCart = [];
    freshCart = [...toggle, id];
    setToggle(freshCart);
    if (basket.length <= 1) {
      window.location.reload();
    }
  }

  //--- showing or hiding 'Product cart' icon when cart is zero or not. if the 'Product Cart' icon is zero there will be no Cart Icon in every webpage.
  useEffect(() => {
    let bookingCartNumberParent = document.querySelector(
      ".booking-cart-display-parent-two"
    );
    if (basket.length != 0) {
      bookingCartNumberParent.style.display = "block";
    } else {
      bookingCartNumberParent.style.display = "none";
    }
  }, [toggle, basket]);

  return (
    <div className="App">
      <Header></Header>
      <div className="app-div">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleAddToBooking={handleAddToBooking}
                addProduct={addProduct}
              ></Home>
            }
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/checkout"
            element={
              <RequireAuth2>
                <CheckoutPage></CheckoutPage>
              </RequireAuth2>
            }
          ></Route>
          <Route
            path="/resetPass"
            element={<ResetPassword></ResetPassword>}
          ></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/wishlist"
            element={
              <RequireAuth>
                <Wishlist></Wishlist>
              </RequireAuth>
            }
          ></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="/bookingCart"
            element={
              <BookingCart
                cart={cart}
                handleAddToBooking={handleAddToBooking}
                decreaseBooking={decreaseBooking}
                clearBookingAll={clearBookingAll}
              ></BookingCart>
            }
          ></Route>
          <Route
            path="/shop"
            element={<Shop addProduct={addProduct}></Shop>}
          ></Route>
          <Route
            path="/productCart"
            element={
              <ProductCart
                basket={basket}
                addProduct={addProduct}
                decreaseProduct={decreaseProduct}
                deleteProduct={deleteProduct}
              ></ProductCart>
            }
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </div>
      <CartIconDisplay cart={cart} basket={basket}></CartIconDisplay>
      <div className="popup-overLimit-msg">
        <p>Sorry You have crossed the cart limit</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
