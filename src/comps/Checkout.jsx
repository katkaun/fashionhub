import { useContext } from "react"
import CartContext from "../context/CartContext"
import { Container, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/Currency";


const Checkout = () => {
    const {clearCart, handleCheckout, itemCount, total} = useContext(CartContext);

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