import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Container, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/Currency";

const Checkout = () => {
    const { clearCart, itemCount, total, cartItems} = useContext(CartContext);

const handleCheckout = async () => {
    try {

        const orderItems = cartItems.map(item => ({
            quantity: item.quantity,
            product: item._id
        }))

        const response = await fetch(
            "http://localhost:3000/v1/fashionhub/orders",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderItems: orderItems
                }),
            }
        );

        if (response.ok) {
            clearCart();
        } else {
            console.log("Failed to place order:", await response.json());
        }
    } catch (error) {
        console.error("Error while placing order:", error);
    }

}
    return (
        <Container className="d-flex flex-column align-items-center">
            <p>Products:</p>
            <h4>{itemCount}</h4>
        
            <p>Total amount:</p>
            <h4>{formatCurrency(total)}</h4>
            <hr />
            <div className="d-flex justify-content-center">
            <Button className="bg-success me-2" 
            onClick={handleCheckout}>Place order</Button>
            <Button className="bg-danger"
            onClick={clearCart}>Remove all</Button>

            </div>
        </Container>
    )
}

export default Checkout