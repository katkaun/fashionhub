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
                variant="outline-secondary"
                size="sm"
                className="mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></Button>
            )}
                 </div>
            </div>
      </div>
       </Container>
    )
}
export default CartItem;