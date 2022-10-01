import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
)