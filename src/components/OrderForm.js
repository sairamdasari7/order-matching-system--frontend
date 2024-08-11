import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OrderForm.css';

const OrderForm = () => {
    const [buyerQty, setBuyerQty] = useState('');
    const [buyerPrice, setBuyerPrice] = useState('');
    const [sellerQty, setSellerQty] = useState('');
    const [sellerPrice, setSellerPrice] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await axios.post('http://localhost:5000/api/place_order', {
                buyerQty: parseInt(buyerQty, 10),
                buyerPrice: parseFloat(buyerPrice),
                sellerQty: parseInt(sellerQty, 10),
                sellerPrice: parseFloat(sellerPrice)
            });

            setBuyerQty('');
            setBuyerPrice('');
            setSellerQty('');
            setSellerPrice('');
            alert('Order placed successfully');
        } catch (error) {
            console.error(error);
            setError('An error occurred while placing the order.');
        }
    };

    return (
        <div className="order-form">
            <h2>Place a New Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Buyer Quantity:
                        <input
                            type="number"
                            value={buyerQty}
                            onChange={(e) => setBuyerQty(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Buyer Price:
                        <input
                            type="number"
                            step="0.01"
                            value={buyerPrice}
                            onChange={(e) => setBuyerPrice(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Seller Quantity:
                        <input
                            type="number"
                            value={sellerQty}
                            onChange={(e) => setSellerQty(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Seller Price:
                        <input
                            type="number"
                            step="0.01"
                            value={sellerPrice}
                            onChange={(e) => setSellerPrice(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit Order</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default OrderForm;
