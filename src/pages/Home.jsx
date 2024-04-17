import { useEffect, useState } from "react"
import ProductItem from "../comps/ProductItem";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/v1/fashionhub/products');
                if(response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else{
                    throw new Error('Fetch products failed');
                }
            } catch (error){
                console.error('error', error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home