import { useContext } from "react";
import CartContext from "../context/CartContext";
import { formatCurrency } from "../utilities/Currency";
import { Button, Container } from "react-bootstrap";




const CartItem = ({product}) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext);

    return (
        <Container className="mb-3">
        <div className="border-bottom py-3">
          <div className="d-flex align-items-start justify-content-between">
            <div className="me-3">
                <h5>{product.name}</h5>
                <p>{formatCurrency (product.price)}</p>
            </div> 
            
            <div className="d-flex align-items-center">
            <Button onClick={() => increase(product)}
            variant="outline-secondary"
            size="sm"
            className="me-2 mb-1">
            +</Button>

            <div className="me-2 mb-1">
                <p className="mb-0">Qty: {product.quantity}</p>
            </div>

            {product.quantity > 1 && (
                <Button onClick={() => decrease(product)}
                variant="outline-secondary"
                size="sm"
                className="me-2 mb-1">
                -</Button>
            )}
            {product.quantity === 1 && (
                <Button onClick={() => removeFromCart(product)}
                variant="danger"
                size="sm"
                className="mb-1">
                Remove</Button>
            )}
                 </div>
            </div>
      </div>
       </Container>
    )
}
export default CartItem;