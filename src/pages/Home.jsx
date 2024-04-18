import { useContext, useEffect, useState } from "react"
import ProductItem from "../comps/ProductItem";
import { Row, Col } from "react-bootstrap"

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
            <Row md={3} xs={2} lg={3} className="g-5"> 
                {products.map(product => (
                    <Col key={product._id}><ProductItem product={product} /></Col>
                ))}
            </Row>  
        </div>
    );
};

export default Home