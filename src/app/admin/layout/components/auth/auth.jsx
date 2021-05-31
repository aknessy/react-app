import { React, Component } from 'react'
import { LoginForm } from './login-form-renderer'
import authService from './../../../../service/auth.service'

export default class Auth extends Component{
  constructor(){
    super();

    this.state = {
      isSubmitted : false,
      email : '',
      password : '',
      remember : false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount(){

  }

  handleSubmit(event){
    console.log(authService.login({plea : 'please'}))

    this.setState({
      isSubmitted : true
    })

    console.log(event)
    event.preventDefault();
  }

  handleChange(event){
    const { name, value, type, checked } = event.target;
    type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
  }

  handleReset(){
    this.setState({
      isSubmitted : false,
      email : '',
      password : '',
      remember : false
    })
  }

  render(){
    return (
      <LoginForm
        handleReset={this.handleReset}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    )
  }
}
