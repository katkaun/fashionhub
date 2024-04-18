import './css/index.css'
import Switch from './Switch';
import Navbar from './comps/Navbar';
import { Container } from 'react-bootstrap';
import CartState from './context/CartState';

function App() {

  return (
    <CartState>
      <Navbar />
        <Container className="mb-4">
         <Switch />
        </Container>
    </CartState> 
  )
}

export default App
