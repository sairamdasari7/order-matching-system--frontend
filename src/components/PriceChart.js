import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/PriceChart.css';

const PriceChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPriceData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/completed_orders');
                const formattedData = response.data.map(order => ({
                    price: order.price,
                    qty: order.qty
                }));
                setData(formattedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPriceData();
    }, []);

    return (
        <div className="chart-container">  {/* Apply the responsive class */}
            <h2>Price Trend Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="qty" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceChart;
