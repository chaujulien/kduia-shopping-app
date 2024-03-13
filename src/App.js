import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
        <div className='container'>
            <h1>Shopping App</h1>
            <div className='row'>
                <div className='col'>
                    <CartValue/>
                </div>
                <div className='col'>
                    <Location/>
                </div>
            </div>
            <h1>Shopping Cart</h1>
            <div className='row'>
                <ExpenseList/>
            </div>
            <h1>Add Items</h1>
            <div className='row'>
                <ItemSelected/>
            </div>
        </div>
    </AppProvider>
  );
}

export default App;
