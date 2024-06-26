import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Checkout from "../comps/Checkout";
import CartItem from "../comps/CartItem";

const Cart = () => {
  const { cartItems, setOrderStatus, orderStatus } = useContext(CartContext);

  return (
    <>
      <div className="d-flex flex-column align-items-center mt-5">
        <h1 className="mb-5">Shopping Cart</h1>
      </div>
      {orderStatus && (
        <div>
          <h4 className="text-success">Thank you for your order!</h4>
          <p>
            We're preparing your order for shipment. You'll receive a
            confirmation email shortly.
          </p>
          <Link to="/">
            <Button
              variant="outline-success mb-4"
              onClick={() => {
                setOrderStatus(false);
              }}
            >
              Back to store
            </Button>
          </Link>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div>
          <h4 className="text-center mt-4">Cart is empty</h4>
        </div>
      ) : (
        cartItems.map((product) => (
          <CartItem key={product._id} product={product} />
        ))
      )}

      {cartItems.length > 0 && <Checkout />}
    </>
  );
};

export default Cart;
