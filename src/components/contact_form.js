import React, { Component } from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleInputChange(event){
        // console.log(event.target.name);
        // console.log(event.target.value);
        const {value, name} = event.target;
        const { form } = this.state;
        form[name] = value;

        this.setState({
            form: {...form}
        });

    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Form:', this.state.form);
        this.props.add(this.state.form);
    }

    reset(){
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            }
        });
    }

    render(){

        const {firstName, lastName, email, phone, address, city, state, zip} = this.state;

        return(
            <form action="" onSubmit={this.handleSubmit}>
                <Field name="firstName" label='First Name' type='text' value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label='Last Name' type='text' value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label='Phone Number' type='tel' value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label='Email' type='email' value={email} onChange={this.handleInputChange}/>
                <Field name="address" label='Address' type='text' value={address} onChange={this.handleInputChange}/>
                <Field name="city" label='City' type='text' value={city} onChange={this.handleInputChange}/>
                <Field name="state" label='State' type='text' value={state} onChange={this.handleInputChange}/>
                <Field name="zip" label='Zip' type='number' value={zip} onChange={this.handleInputChange}/>
                <button className='btn btn-outline-primary'>Add Contact</button>
                <button className='btn btn-outline-danger' type='button' onClick={this.reset}>Clear Form</button>
            </form>
        );
    }
}

export default ContactForm;