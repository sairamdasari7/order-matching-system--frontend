// src/App.js
import React from 'react';
import './styles/styles.css'; // Import the CSS file
import OrderForm from './components/OrderForm';
import PriceChart from './components/PriceChart';
import PendingOrderTable from './components/PendingOrderTable';
import CompletedOrderTable from './components/CompletedOrderTable';

const App = () => {
    return (
        <div className="app">
            <h1>Order Matching System</h1>
            <OrderForm />
            <PriceChart />
            <PendingOrderTable />
            <CompletedOrderTable />
        </div>
    );
};

export default App;
