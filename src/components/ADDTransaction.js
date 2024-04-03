import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
const ADDTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount

        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div class='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='E
                    nter text..' />
                </div>
                <div class='form-control '>
                    <label for='amount'>
                        amount<br />
                        ( negetive-expense,positive-income)
                    </label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount..' />
                </div>
                <button class='btn'>Add transaction</button>

            </form>
        </div>
    )
}

export default ADDTransaction