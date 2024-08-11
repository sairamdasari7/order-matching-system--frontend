import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/PendingOrderTable.css';

const PendingOrderTable = () => {
    const [pendingOrders, setPendingOrders] = useState([]);

    useEffect(() => {
        const fetchPendingOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/pending_orders');
                setPendingOrders(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPendingOrders();
    }, []);

    return (
        <div className="table-container">  {/* Apply the responsive class */}
            <h2>Pending Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Buyer Quantity</th>
                        <th>Buyer Price</th>
                        <th>Seller Quantity</th>
                        <th>Seller Price</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingOrders.length > 0 ? (
                        pendingOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.buyerQty}</td>
                                <td>{order.buyerPrice}</td>
                                <td>{order.sellerQty}</td>
                                <td>{order.sellerPrice}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No pending orders</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PendingOrderTable;
