import React, {
  Component
} from 'react';
import axios, * as others from 'axios';



class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var body = {
      Name: 'Fred',
      Email: 'Flintstone@gmail.com'
    }
    axios({
        method: 'get',
        url: 'http(s)://5cac3f46c85e05001452f11e.mockapi.io/api/accounts/:endpoint',
        data: body
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

  }


  render() {
    return ( <
      div >
      <
      form onSubmit = {
        this.handleSubmit
      } >

      <
      label htmlFor = "name" > Enter username < /label> <
      input id = "name"
      name = "name"
      type = "text" / >
      <
      br / >

      <
      label htmlFor = "email" > Enter your email < /label> <
      input id = "email"
      name = "email"
      type = "email" / >
      <
      br / >

      <
      label htmlFor = "address" > Enter your address < /label> <
      input id = "address"
      name = "address"
      type = "text" / >
      <
      br / >
      <
      label htmlFor = "phone" > Enter phone number < /label> <
      input id = "phone"
      name = "phone"
      type = "text" / >
      <
      br / >
      <
      label htmlFor = "city" > Enter your city < /label> <
      input id = "city"
      name = "city"
      type = "text" / >
      <
      br / >
      <
      label htmlFor = "country" > Enter your country < /label> <
      input id = "country"
      name = "country"
      type = "text" / >
      <
      br / >
      <
      button > Submit < /button> </form >

      <
      /div>

    );


  }
}
export default MyForm;
