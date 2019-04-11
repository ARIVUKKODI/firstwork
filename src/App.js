import React, {
  Component
} from 'react';
import axios, * as others from 'axios';



class MyForm extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: ''
    }

    this.onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      // get our form data out of state
      const {
        name,
        email,
        phone,
        address,
        city,
        country
      } = this.state;
    }
  }

  componentDidMount() {
    axios.get('/api/accounts/:endpoint')
      .then(json => console.log(json))
  }




  render() {
    const {
      name,
      email,
      phone,
      address,
      city,
      country
    } = this.state;
    return ( <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      input type = "text"
      name = "name"
      value = {
        name
      }
      placeholder = {
        'Enter your name'
      }
      onChange = {
        this.onChange
      }
      /> <
      br / >
      <
      input type = "text"
      label = "Email"
      name = "email"
      value = {
        email
      }
      placeholder = {
        'Enter your Email'
      }
      onChange = {
        this.onChange
      }
      /> <
      br / >
      <
      input type = "text"
      name = "phone"
      value = {
        phone
      }
      placeholder = {
        'Enter your phone number'
      }
      onChange = {
        this.onChange
      }
      /> <
      br / >
      <
      input type = "text"
      name = "address"
      value = {
        address
      }
      placeholder = {
        'Enter your Address'
      }
      onChange = {
        this.onChange
      }
      /> <
      br / >
      <
      input type = "text"
      name = "city"
      value = {
        city
      }
      placeholder = {
        'Enter your city'
      }
      onChange = {
        this.onChange
      }
      /> <
      br / >
      <
      input type = "text"
      name = "country"
      value = {
        country
      }
      placeholder = {
        'Enter your country'
      }
      onChange = {
        this.onChange
      }
      /> <
      br / >
      <
      button type = "submit" > Submit < /button> < /
      form >
    );
  }
}
export default MyForm;
