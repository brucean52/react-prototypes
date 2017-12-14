import React, { Component } from 'react';
import ContactCard from './contact_card';
//import contactData from '../data/contacts';

class ContactList extends Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         contacts: contactData
    //     }
    // }

    render(){
        //console.log('Contact Data: ', this.state.contacts);
        // const list = this.state.contacts.map((item, index) => {
        //     console.log('item:', item);
        // });
        const list = this.props.contacts.map((item, index) => {
            console.log("index: ", index);
            console.log("item: ", item);
            return(

            <ContactCard key={index} contact={item}/>
            );
             
        });
        return(
            <div className='col-8'>
                <div className="row">{list}</div>
            </div>
        );
    }
}

export default ContactList;