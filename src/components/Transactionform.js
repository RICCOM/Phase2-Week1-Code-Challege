import React, { useState } from 'react';
import './Transactionform.css';

function Transactionform({ addTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction({ date, description, category, amount });
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <div className="form-row">
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                
              
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />

                
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Category"
                    required
                />
                
                
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    required
                />
            </div>
            <div className='submit-container'>
            <button type="submit" className="add-transaction-button">
                Add Transaction
            </button>
            </div>
        </form>
    );
}

export default Transactionform;



