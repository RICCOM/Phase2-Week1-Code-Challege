// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Transactionform from './components/Transactionform';
// import Transactiontable from './components/Transactiontable';

// function App() {
//     const [filter, setFilter] = useState('');
//     const [transactions, setTransactions] = useState([]);

//     const handleFilter = (e) => {
//         setFilter(e.target.value);
//     };

//     const addTransaction = (transaction) => {
//         setTransactions([...transactions, transaction]);
//     };

//     const filteredTransactions = transactions.filter(transaction =>
//         transaction.description.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//         <div>
//             <Navbar />
//             <Search filter={filter} handleFilter={handleFilter} />
//             <Transactionform addTransaction={addTransaction} />
//             <Transactiontable transactions={filteredTransactions} />
//         </div>
//     );
// }

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Transactionform from './components/Transactionform';
import Transactiontable from './components/Transactiontable';

function App() {
    const [filter, setFilter] = useState('');
    const [transactions, setTransactions] = useState([]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(filter.toLowerCase()) ||
            transaction.amount.toString().includes(filter);
    });

    return (
        <div>
            <Navbar />
            <Search filter={filter} handleFilter={handleFilterChange} />
            <Transactionform addTransaction={addTransaction} />
            <Transactiontable transactions={filteredTransactions} />
        </div>
    );
}

export default App;



