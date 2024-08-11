import React, { useState } from 'react';
import './NewItems.css';  // Import the CSS file

const NewItems = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div className="new-items-container">
            <h2>New Items</h2>
            <div className="item-form">
                <input
                    type="text"
                    placeholder="Enter new item"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.target.value) {
                            addItem(e.target.value);
                            e.target.value = '';
                        }
                    }}
                />
            </div>
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewItems;
