import { Container, Navbar as BootstrapNavbar, Nav, Button, FormControl} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Navbar = () => {

    const {cartItems} = useContext(CartContext)

    return(
        <BootstrapNavbar sticky="top" className="bg-white shadow-sm mb-4">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/login" as={NavLink}>
                        Login
                    </Nav.Link>
                    <Nav.Link to="/registration" as={NavLink}>
                        Register
                    </Nav.Link>
                </Nav>
                <FormControl 
                    id="search-input"
                    style={{ width: 500 }}
                    placeholder="Search..."
                    className="m-auto"
                    />
                    <Nav.Link to="/cart" as={NavLink}>
                    <ShoppingCart size={30} />
                    {cartItems.length > 0 && (
                        <div className="position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                            {cartItems.length}
                        </span>
                    </div>
                    )}
                </Nav.Link>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar;
