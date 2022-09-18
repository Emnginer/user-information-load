import React from 'react';
import data from '../../data/user.json'
import { useEffect, useState } from 'react';
import User from '../User/User';
import './Information.css'
import Cart from '../Cart/Cart';

const Information = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
      setUsers(data);
      console.log(data);
    },[])
	
	

    const [cart, setCart] = useState([]);
    const handleAddUser = (user) => {
        console.log('clicked me user', user);
        const newCart = [...cart, user];
        setCart(newCart);
    }
  
    return (
        <div className="user-container-full">
            <div className='user-information-container'>
            {
            users.map(user => <User user={user} handleAddUser={handleAddUser} key={user.id}></User>)
            }
            </div>

            <div className="user-cart-container">
                {/* <h2>total {cart.length}</h2> */}
                <Cart cart={cart}></Cart>
            </div>

        </div>
       

    );
};
export default Information;