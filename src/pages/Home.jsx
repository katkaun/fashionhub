import { useContext, useEffect, useState } from "react"
import ProductItem from "../comps/ProductItem";
import { Row, Col } from "react-bootstrap"
import { SearchContext } from "../context/SearchContext";

const Home = () => {
    const [products, setProducts] = useState([]);
    const {searchQuery} = useContext(SearchContext)

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

    const filtered = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    

    return (
        <div>
            <h2>FashionHub</h2>
            {filtered.length > 0 ? (
                <Row md={3} xs={2} lg={3} className="g-5"> 
                    {filtered.map(product => (
                        <Col key={product._id}><ProductItem product={product} /></Col>
                    ))}
                </Row>
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
};

export default Home