import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompletedOrderTable = () => {
    const [completedOrders, setCompletedOrders] = useState([]);

    useEffect(() => {
        const fetchCompletedOrders = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/completed_orders');
                setCompletedOrders(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCompletedOrders();
    }, []);

    return (
        <div>
            <h2>Completed Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {completedOrders.length > 0 ? (
                        completedOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.price}</td>
                                <td>{order.qty}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No completed orders</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CompletedOrderTable;
