import "./css/index.css";
import Switch from "./Switch";
import Navbar from "./comps/Navbar";
import { Container } from "react-bootstrap";
import CartProvider from "./context/CartProvider";
import SearchProvider from "./context/SearchContext";
import Footer from "./comps/Footer";
import AnnouncementBar from "./comps/AnnouncementBar";

function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <AnnouncementBar />
        <Navbar />
        <Container className="mb-4">
          <Switch />
        </Container>
        <Footer />
      </CartProvider>
    </SearchProvider>
  );
}

export default App;
