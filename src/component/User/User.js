import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus} from '@fortawesome/free-solid-svg-icons';
import './User.css'
const User = (props) => {
    return (
        <div style={{display: 'flex',padding:'8px'}}>
            <div className="user-image">
                <img src={props.user.img} alt="" style={{height:'200px', width:'200px'}}/>
            </div>
           <div className="user-details">
            <h2>Name: {props.user.name}</h2>
            <h4>Email: {props.user.email}</h4>
            <h4>Phone: {props.user.phone}</h4>
            <h5>Address: street-{props.user.address.street} and city-{props.user.address.city}</h5> 
            <h4>Yearly Income: {props.user.yearlyIncome}</h4>
            <button onClick={()=>props.handleAddUser(props.user)}><FontAwesomeIcon icon={faPlus} />add to cart</button>
           </div>
            
        </div>
    );
};

export default User;