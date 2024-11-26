import Modal from "react-modal";
import React, {useState} from "react";
import { useEffect } from "react";

export function PizzaDetails({ pizza, selectedSize, setSelectedSize, price }) {
  return (
    <div>
      <h2>{pizza.name}</h2>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "200px", height: "200px" }}
      />
      <p style={{ fontWeight: "bold" }}>Price: {price}</p>
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
  const [price, setPrice] = useState("");

  // Đặt giá và kích thước mặc định khi modal mở
  useEffect(() => {
    if (isOpen && selectedPizza) {
      setSelectedSize("Small");
      setPrice(selectedPizza.price.Small); // Giá mặc định là Small
    }
  }, [isOpen, selectedPizza]);

  // Cập nhật giá khi kích thước thay đổi
  useEffect(() => {
    if (selectedPizza) {
      setPrice(selectedPizza.price[selectedSize]);
    }
  }, [selectedSize, selectedPizza]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Pizza Details"
    >
      {selectedPizza && (
        <>
          <PizzaDetails
            pizza={selectedPizza}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            price={price}
          />
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
          <button style={{ marginTop: "20px", width: "50%" }}>Add to Cart</button>
        </>
      )}
    </Modal>
  );
}