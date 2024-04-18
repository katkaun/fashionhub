import { useContext } from "react";
import CartContext from "../context/CartContext";
import { formatCurrency } from "../utilities/Currency";
import { Button, Container } from "react-bootstrap";




const CartItem = ({product}) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext);

    return (
        <Container>
            <div>
                <h5>{product.name}</h5>
                <p>{formatCurrency (product.price)}</p>
            </div> 
            
            <Button onClick={() => increase(product)}
            variant="primary"
            size="sm"
            className="mr-2 mb-1">
            +</Button>

            <div>
                <p>Qty: {product.quantity}</p>
            </div>

            {product.quantity > 1 && (
                <Button onClick={() => decrease(product)}
                variant="primary"
                size="sm"
                className="mr-2 mb-1">
                -</Button>
            )}
            {product.quantity === 1 && (
                <Button onClick={() => removeFromCart(product)}
                variant="primary"
                size="sm"
                className="mr-2 mb-1">
                </Button>
            )}
       </Container>
    )
}
export default CartItem;