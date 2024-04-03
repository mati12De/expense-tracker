import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import ADDTransaction from './components/ADDTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    < GlobalProvider >
      <Header />
      <div className=' container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <ADDTransaction />
      </div>


    </GlobalProvider >
  );
}

export default App;
