import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Works from '../pages/Works';
import Contact from '../pages/Contact';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
