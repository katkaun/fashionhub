import { Button, Card, CardBody, CardImg, CardTitle } from "react-bootstrap";
import { formatCurrency } from "../utilities/Currency";
import { useContext } from "react";
import CartContext from "../context/CartContext";


const ProductItem = ({ product }) => {
    const { addToCart, increase, cartItems } = useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product._id)
    }

    return (
        <Card className="h-100">
            <CardImg
                variant="top"
                style={{ objectFit: "cover", height: "300px" }}
            />
            <CardBody className="d-flex flex-column">
                <div key={product._id} className="product">
                    <span className="text-muted">{product.brand}</span>
                    <CardTitle className="d-flex justify-content-between align-items-baseline mb-2">
                        {product.name}
                    </CardTitle>
                    <span className="text-sm">{product.description}</span>
                    <span className="text-muted">{formatCurrency(product.price)}</span>

                    <Button
                        onClick={() => {
                            if (isInCart(product)) {
                                increase(product);
                            } else {
                                addToCart(product);
                            }
                        }}
                        className="bg-secondary"
                    >
                        {isInCart(product) ? "Add More" : "Add to Cart"}
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProductItem;