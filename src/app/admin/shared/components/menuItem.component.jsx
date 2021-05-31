import { React, Component } from 'react'

export default class MenuItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const styling = {
      color: "#ffffff",
      background: "#222",
      padding: 4
    }

    return(
      <li style={ styling }>
        <span className="icon">{this.props.item.icon}</span>
        <span onClick={() => this.props.linkClickHandler(this.props.index)}>{this.props.item.text}</span>
      </li>
    )
  }
}
