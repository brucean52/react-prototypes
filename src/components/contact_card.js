import React, { Component } from 'react';

export default props => {
    const {firstName, lastName, phone, email, address, city, state, zip} = props.contact;
    return (
        <div className="col-6 my-3">
            <div className="card">
                <h5 className='card-header'>{lastName}</h5>
                <div className="card-block">
                    <h4 className='card-title'>{firstName} {lastName}</h4>
                    <p className='card-text'><strong>Phone:</strong> {phone}</p>
                    <p className='card-text'><strong>Email:</strong> {email}</p>
                    <p className='card-text'>{address}</p>
                    <p className='card-text'>{city}, {state} {zip}</p>
                </div>
            </div>
        </div>
    );
}

// class ContactCard extends Component {
    
//         render(){
//             return(
//                 <div className='card'>
//                     <h5 className='card-header'>Lee</h5>
//                     <div className="card-block">
//                     <h4 className='card-title'>Bruce Lee</h4>
//                     <p className='card-text'><strong>Phone:</strong> 555-123-4567</p>
//                     <p className='card-text'><strong>Email:</strong> jkd@mail.com</p>
//                     </div>
//                 </div>
//             );
//         }
//     }
    
    //export default ContactCard;
    