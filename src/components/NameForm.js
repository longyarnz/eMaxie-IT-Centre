import React, { Component } from 'react';
import DynamicForm from './DynamicForm';
import Ajax from './Ajax';
import ParseData from './ParseData';
import ParseQuery from './ParseQuery';

export default class NameForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "no-display",
      name: ""
    }
  }

  submit(data){
    const name = ParseData(data).name;
    const url = "http://emaxie.org.ng/server/mail.php";
    const method = "POST";
    const async = true;
    data = ParseQuery(data, "contact");
    Ajax(url, method, data, async, this.responseHandler);
    this.setState({
      display: "",
      name
    });
  }

  responseHandler(response){}

  render() {
    const name = {
      name: 'input',
      type: 'text',
      ref: 'name',
      placeholder: 'What is your name?',
      className: "form-control",
      spellCheck: false
    }
    const phone = {
      name: 'input',
      type: 'number',
      ref: 'phone',
      placeholder: 'What is your phone number',
      className: "form-control",
      spellCheck: false
    }
    
    return (
      <div className="name-form">
        <div>
          <DynamicForm className="name-form" submit={(data)=>this.submit(data)} formData={[name, phone]} check="contact" button="Request A Call!" clear={false} />
          <div className={`response-tab ${this.state.display}`}>Thank you very much {this.state.name}, we shall call you as soon as possible!</div>
        </div>
      </div>
    );
  }
}
