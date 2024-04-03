import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import ADDTransaction from './ADDTransaction';

function App() {
  return (
    <div className="App">
      <Header />
      <div className=' container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <ADDTransaction />
      </div>


    </div>
  );
}

export default App;
