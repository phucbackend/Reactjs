import Modal from "react-modal";
import React, { useState, useEffect } from "react";

export function ProductDetail({ pizza }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Small");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <h2>{pizza.name}</h2>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "200px", height: "200px" }}
      />
      <p style={{ fontWeight: "bold" }}>Price: {pizza.price.Small}</p>
      <p>{pizza.description}</p>
      <div className="size-selection">
        {Object.keys(pizza.price).map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{
              backgroundColor: selectedSize === size ? "#e7946d" : "#f0f0f0",
              color: selectedSize === size ? "#fff" : "#000",
            }}
          >
            {size}
          </button>
        ))}
      </div>
      <button onClick={handleOpenModal}>Add to Cart</button>

      {/* Modal hiển thị khi nhấn "Add to Cart" */}
      <PizzaModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        selectedPizza={pizza}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export function QuantityControls({ quantity, setQuantity }) {
  return (
    <div>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
      >
        -
      </button>
      <span style={{ margin: "0 10px" }}>{quantity}</span>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export function AddToCartButton() {
  return (
    <button style={{ marginTop: "20px", width: "50%" }}>Add to Cart</button>
  );
}

export default function PizzaModal({
  isOpen,
  onRequestClose,
  selectedPizza,
  quantity,
  setQuantity,
}) {
  const [selectedSize, setSelectedSize] = useState("Small");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (isOpen && selectedPizza) {
      setSelectedSize("Small");
      setPrice(parseFloat(selectedPizza.price.Small.slice(1))); // Giá mặc định cho Small
    }
  }, [isOpen, selectedPizza]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setPrice(parseFloat(selectedPizza.price[size].slice(1)));
  };

  let counter = parseInt(localStorage.getItem("counter") || "1");
  const handleAddToCart = () => {
    const cartItem = {
      // tạo id tăng dần , bắt đầu từ 1
      id: counter,
      name: selectedPizza.name,
      size: selectedSize,
      price: price,
      quantity: quantity,
      totalPrice: price * quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    //
    localStorage.setItem("counter", (counter + 1).toString());
    alert("Added to cart successfully!");
    onRequestClose(); // Đóng modal sau khi thêm
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pizza Details"
    >
      {selectedPizza && (
        <>
          <div>
            <h2>{selectedPizza.name}</h2>
            <img
              src={selectedPizza.img}
              alt={selectedPizza.name}
              style={{ width: "200px", height: "200px" }}
            />
            <p style={{ fontWeight: "bold" }}>Price: ${price.toFixed(2)}</p>
            <p>{selectedPizza.description}</p>
            <div className="size-selection">
              {Object.keys(selectedPizza.price).map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  style={{
                    backgroundColor:
                      selectedSize === size ? "#e7946d" : "#f0f0f0",
                    color: selectedSize === size ? "#fff" : "#000",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div>
            <QuantityControls quantity={quantity} setQuantity={setQuantity} />
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart - Total: ${(price * quantity).toFixed(2)}
          </button>
        </>
      )}
    </Modal>
  );
}
