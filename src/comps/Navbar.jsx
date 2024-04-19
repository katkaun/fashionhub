import { Container, Navbar as BootstrapNavbar, Nav, FormControl} from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useContext, useRef, useState } from "react";
import CartContext from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const {cartItems} = useContext(CartContext)
    const {updateSearchQuery} = useContext(SearchContext)
    const inputRef = useRef();

    const handleSearch = () => {
        const inputValue = inputRef.current.value.trim();

        if( inputValue === '') {
            navigate('/');
        } else {
            updateSearchQuery(inputValue);
        }
    }

    const reset = () => {
        inputRef.current.value = "";
        updateSearchQuery('');
    }

    return(
        <BootstrapNavbar sticky="top" className="bg-white shadow-sm mb-4">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink} onClick={reset}>
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
                    ref={inputRef}
                    id="search-input"
                    style={{ width: 400 }}
                    placeholder="Search..."
                    className="m-auto"
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            handleSearch();
                        }
                    }}
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
