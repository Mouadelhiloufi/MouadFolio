import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import Presentations from '../pages/Presentations';
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/presentations" element={<Presentations />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
