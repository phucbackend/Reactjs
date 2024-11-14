import Modal from "react-modal";

export function PizzaDetails({ pizza, selectedSize, setSelectedSize }) {
  return (
    <div>
      <h2>{pizza.name}</h2>
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "200px", height: "200px" }}
      />
      <p style={{ fontWeight: "bold" }}>Price: {pizza.price}</p>
      <p>{pizza.description}</p>
      <div className="size-selection">
        {pizza.size.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{
              backgroundColor: selectedSize === size ? "#2b1c2c" : "#f0f0f0",
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
  selectedSize,
  setSelectedSize,
}) {
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
          />
          <QuantityControls quantity={quantity} setQuantity={setQuantity} />
          <AddToCartButton />
        </>
      )}
    </Modal>
  );
}
