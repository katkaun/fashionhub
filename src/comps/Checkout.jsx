import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Container, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/Currency";


const Checkout = () => {
    const {clearCart, handleCheckout, itemCount, total} = useContext(CartContext);

    return (
        <Container>
            <p>Products:</p>
            <h4>{itemCount}</h4>
            <p>Total amount:</p>
            <h4>{formatCurrency(total)}</h4>
            <hr />
            <div>
                <Button onClick={handleCheckout}>CHECKOUT</Button>
                <Button onClick={clearCart}>EMPTY CART</Button>
            </div>
        </Container>
    )
}

export default Checkout