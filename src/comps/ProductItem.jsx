import { Button } from "react-bootstrap";

const ProductItem = ({ product }) => {
    return (
        <div key={product._id} className="product">
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <Button>Add to cart</Button>
        </div>
    );
};

export default ProductItem;