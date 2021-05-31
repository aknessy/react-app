import { React, Component } from 'react'
import { BannerArea } from './components/Banner'
import { Toolbar } from './components/Toolbar'
import { Container } from 'react-bootstrap'

import { InterestForm } from './components/InterestForm'
import { HomeAnalytics } from './components/HomeAnalytics'
import { FeaturesArea } from './components/FeaturesArea'
import { InterestAreas } from './components/InterestAreas'

export default class LandingPage extends Component{
  constructor(){
    super();

    this.state = {
      forMenubar : {
        searchTerm : '',
        narrowDown : '',
      },
      interestEmail : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.submitInterestEmail = this.submitInterestEmail.bind(this)
    this.handleDropdownItems = this.handleDropdownItems.bind(this)
    this.handelInterestFormChange = this.handleInterestFormChange.bind(this)
  }

  handleChange(event){
    this.setState(prevState => ({
      forMenubar : {
        ...prevState.forMenubar,
        searchTerm : event.target.value
      }
    }))
  }

  handleDropdownItems(event){
    this.setState(prevState => ({
      forMenubar : {
        ...prevState.forMenubar,
        narrowDown : event.target.innerText
      }
    }))
  }

  handleSubmit(event){
    if(this.state.forMenubar.searchTerm && this.state.forMenubar.narrowDown){
      const searchTerm = this.state.forMenubar.searchTerm
      const category = this.state.forMenubar.narrowDown

      console.log({keyword: searchTerm, category : category})
    }

    event.preventDefault()
  }

  submitInterestEmail(event){
    console.log(event.target.value)
  }

  handleInterestFormChange(event){
    const { name, value} = event.target
    this.setState({interestEmail : value})
  }

  render(){
    return (
      <div className="home-wrapper">
        <BannerArea
          data={this.state.interestEmail}
          formSubmit={this.submitInterestEmail}
          formFieldChange={this.handleInterestFormChange}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCategorySelect={this.handleDropdownItems}
          forMenubar={this.state.forMenubar}
        />

        <FeaturesArea />

        <Container>
          <HomeAnalytics />
        </Container>

        <div className="areas-interest">
          <InterestAreas />
        </div>
      </div>
    )
  }
}
