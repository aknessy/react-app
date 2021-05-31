import { React, Component } from 'react'
import Spinner from '../../../shared/components/spinner/spinner.component'

export default class Owner extends Component{
  constructor(){
    super();
    this.state = {
      owner : {},
      isLoading : true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
          this.setState ({
            owner : data,
            isLoading : false
          })
        })
    }, 1500)
  }

  render(){
    return(
      <div className="person">
        {
          this.state.isLoading ? <Spinner /> :
          <p>{this.state.owner.title}</p>
        }
      </div>
    )
  }
}
