import { Container, Navbar as BootstrapNavbar, Nav, Button, FormControl} from "react-bootstrap"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <BootstrapNavbar sticky="top" className="bg-light shadow-sm mb-4">
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
                    style={{ width: 500 }}
                    placeholder="Search..."
                    className="m-auto"
                    />
                <Button style={{position:"relative"}} 
                variant="outline-primary" className="rounded-circle">

                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-cart2" 
                viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 
                .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 
                1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 
                2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 
                2 2 0 0 1-4 0"/>
                </svg>
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                    color: "white",
                    width: "1.25rem",
                    height: "1.25rem",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    transform: "translate(25%, 25%)",
                    fontSize:"0.75rem"
                }}
                >
                    3
                </div>
                </Button>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar;