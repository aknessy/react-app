import { React, Component } from 'react'
import { PasswordResetForm } from './password-reset-form-renderer'

export default class PasswordReset extends Component{
  constructor(){
    super();

    this.state = {
      phone : '',
      isSubmitted : false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount(){

  }

  handleSubmit(){
    this.setState({
      isSubmitted : true
    })
  }

  handleChange(event){
    const { name, value } = event.target
    this.setState({
      [name] : value
    })
  }

  handleReset(){
    this.setState({
      isSubmitted : false,
      phone : ''
    })
  }

  render(){
    return (
      <PasswordResetForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
        data={this.state}
      />
    )
  }
}
