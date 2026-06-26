
import Card from "../components/Card";
import Navbar from "../components/Navbar";

import cardData from "../data/cardData.js";
import products from "../data/products.js";

import { useState } from "react";
import IndiviualCard from "../components/IndiviualCard.jsx";
import Cart from "../components/Cart.jsx";
import ApiFetch from "../components/ApiFetch.jsx";
import Form from "../components/Form.jsx";

function Home() {
  const cartItems = [];

  const [quantity, setQuantity] = useState(0);
  const [Products, setProducts] = useState(products);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addCart = (id) => {
    const update = Products.find((pr) => pr.id == id);
    let newarray = [];
    let found = false;
    newarray = cart.map((e) => {
      if (id == e.id) {
        found = true;
        if (e.quantity < e.stoke) {
          return { ...e, quantity: e.quantity + 1 };
        }
        return e;
      }
      return e;
    });
    if (!found) newarray = [...cart, update];
    setCart(newarray);
  };

  const updateCardQantity = (id, op = 1) => {
    console.log(id);
    const update = Products.map((pr) => {
      if (pr.id == id && pr.stoke > pr.quantity) {
        return { ...pr, quantity: pr.quantity + op };
      }
      return pr;
    });
    setProducts(update);
  };

  return (
    <div style={{}}>
      {/* <ApiFetch /   > */}
      <Navbar showCart={showCart} setShowCart={setShowCart} cart={cart} />
      {showCart && (
        <div
          style={{
            height: "500px",
            position: "absolute",
            right: "20px",
            top: "70px",
            width: "320px",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            overflowY: "auto",
            zIndex: 10,
            padding: "20px",
            border: "1px solid #ddd",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>🛒 Your Cart</h2>

          <hr />

          {cart.map((pr) => {
            return <Cart pr={pr} updateCardQantity={updateCardQantity} />;
          })}

          <div style={{}}>
            <h3>Total: ₹499</h3>

            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          width: "90%",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {Products.map((pro) => (
          <IndiviualCard
            key={pro.id}
            pro={pro}
            increaseQuantity={updateCardQantity}
            addCart={addCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
