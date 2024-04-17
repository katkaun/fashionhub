import './css/index.css'
import Switch from './Switch';
import Navbar from './comps/Navbar';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
    <Navbar />
      <Container className="mb-4">
         <Switch />
      </Container>
    </>
  )
}

export default App
