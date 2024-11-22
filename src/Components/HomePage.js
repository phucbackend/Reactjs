import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";
import Pizza from "../Data/Pizza";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

export function Header({ setSearchQuery }) {
  return (
    <header>
      <div className="header-left">
        <h1>Pizza Shop</h1>
      </div>
      <div className="header-right">
        <form>
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
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
export function Body({ searchQuery }) {
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

  const filteredPizza = Pizza.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <div className={searchQuery ? "search-results" : ""}>
        {filteredPizza.map((pizza) => (
          <div
            key={pizza.id}
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
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <Body searchQuery={searchQuery} />
    </div>
  );
}