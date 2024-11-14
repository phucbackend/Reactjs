import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";
import Pizza from "../Data/Pizza";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

export function Header() {
  return (
    <header>
      <div>
        <h1>Pizza Shop</h1>
      </div>
      <div>
        <Link to="/login">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/payments">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </header>
  );
}
export function Body() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setQuantity(1); // Reset quantity to 1
    setSelectedSize(""); // Reset selected size
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPizza(null);
  };

  return (
    <main>
      <div>
        {Pizza.map((pizza, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => openModal(pizza)}
          >
            <img
              src={pizza.img}
              style={{
                width: "150px",
                height: "150px",
                margin: "auto",
              }}
            />
            <h3>{pizza.name}</h3>
          </div>
        ))}
      </div>
      <ProductDetail
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedPizza={selectedPizza}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </main>
  );
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
