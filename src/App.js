import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import ListProduct from './components/ListProduct';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
        <Container>
            <Routes>
                <Route path="/" element={<ListProduct />} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
        </Container>
        </BrowserRouter>
    )
}

export default App;