import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovementsContextProvider } from './context/MovementContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MovementsContextProvider>
            <App />
        </MovementsContextProvider>

    </React.StrictMode>
);