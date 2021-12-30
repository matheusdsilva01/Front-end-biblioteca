import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from '../components/form';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Form/>} />
            </Routes>
        </BrowserRouter>
    )
}