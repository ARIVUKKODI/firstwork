import React from 'react';
import Axios from "axios";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: ''
    }
  }


  onChangeName = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeEmail = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      email: e.target.value
    });
  };

  onChangePhone = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      phone: e.target.value
    });
  };

  onChangeAddress = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      address: e.target.value
    });
  };

  onChangeCity = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      city: e.target.value
    });
  };

  onChangeCountry = (e: React.ChangeEvent < HTMLInputElement > ) => {
    this.setState({
      country: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      address,
      city,
      country
    } = this.state;


    Axios({
      method: 'post',
      url: 'http://5cac3f46c85e05001452f11e.mockapi.io/api/accounts/data',
      responseType: 'json',
      data: {
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        country: country
      }
    }).then(res => {
      console.log(JSON.stringify(res.data));
    }).catch(err => {
      console.log("data not found");
    });
  }

    componentDidMount(){
  Axios.get('http://5cac3f46c85e05001452f11e.mockapi.io/api/accounts/data')
  .then(res => console.log(res.data));
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

    return (
      <form onSubmit = {
        this.handleSubmit
      } >
      <input type = "text"
      name = "name"
      value = {
        name
      }
      placeholder = {
        'Enter your name'
      }
      onChange = {
        this.onChangeName
      }
      />
      <br/>

      <input type = "text"
      label = "Email"
      name = "email"
      value = {
        email
      }
      placeholder = {
        'Enter your Email'
      }
      onChange = {
        this.onChangeEmail
      }
      />
      <br/>

      <input type = "text"
      name = "phone"
      value = {
        phone
      }
      placeholder = {
        'Enter your phone number'
      }
      onChange = {
        this.onChangePhone
      }
      />
      <br/>

      <input type = "text"
      name = "address"
      value = {
        address
      }
      placeholder = {
        'Enter your Address'
      }
      onChange = {
        this.onChangeAddress
      }
      />
      <br/>

      <input type = "text"
      name = "city"
      value = {
        city
      }
      placeholder = {
        'Enter your city'
      }
      onChange = {
        this.onChangeCity
      }
      />
      <br/>

      <input type = "text"
      name = "country"
      value = {
        country
      }
      placeholder = {
        'Enter your country'
      }
      onChange = {
        this.onChangeCountry
      }
      />
      <br/>

      <button onClick = {
        this.onSubmit
      } >
      Submit
       </button>
    </form >
    );
  }
}

export default MyForm;
