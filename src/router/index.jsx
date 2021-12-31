import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from '../pages/cadastro';
import Obras from '../pages/obras';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Form/>} />
                <Route exact path="/obras" element={<Obras/>} />
            </Routes>
        </BrowserRouter>
    )
}