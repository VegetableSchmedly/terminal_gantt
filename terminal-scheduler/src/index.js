import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovementsContextProvider } from './context/MovementContext';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MovementsContextProvider>
            <App />
        </MovementsContextProvider>

    </React.StrictMode>
);