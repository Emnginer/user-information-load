import React from 'react';

const Cart = (props) => {

    let salary = 0;
    for (let i = 0; i < props.cart.length; i++) {
        const element = props.cart[i];
        salary += element.yearlyIncome
    
    }

    return (
        <div>
            <h2>Total User: {props.cart.length}</h2> <br />
            <h4>Annual Income: {salary}</h4> 
        </div>
    );
};

export default Cart;    