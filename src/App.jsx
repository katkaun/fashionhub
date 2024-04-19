import './css/index.css'
import Switch from './Switch';
import Navbar from './comps/Navbar';
import { Container } from 'react-bootstrap';
import CartState from './context/CartState';
import SearchProvider from './context/SearchContext';

function App() {

  return (
    <SearchProvider>
      <CartState>
        <Navbar />
          <Container className="mb-4">
          <Switch />
        </Container>
      </CartState> 
    </SearchProvider>
  )
}

export default App
