import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Checkout from "../comps/Checkout";
import CartItem from "../comps/CartItem";




const Cart = () => {
    const { cartItems, checkout, clearCart } = useContext(CartContext);

    return(
        <>
            <div>
                <h1>Shopping Cart
                <span>({cartItems.length})</span>
                </h1>
            </div>
            {checkout && (
                <div>
                    <h4>Thank you for your order!</h4>
                    <p>We're preparing your order for shipment. You'll receive a confirmation email shortly.</p>
                    <Link to="/">
                        <Button className="bg-danger" 
                        onClick={clearCart}>Back to store</Button>
                    </Link>
                </div>
            )}

            <Row>
                {cartItems.length === 0 ? (
                    <Col>
                        <h4 className="text-center">Cart is empty</h4>
                    </Col>
                ) : (
                    cartItems.map((product) => (
                        <Col key={product._id} md={4}>
                            <CartItem product={product} />
                        </Col>
                    ))
                )}
            </Row>

           <div>
            {cartItems.length > 0 && <Checkout />}
            </div> 

        </>
    )
} 

export default Cart;