import { React, Component } from 'react'
import MenuItem from '../../../shared/components/menuItem.component.jsx'
import MenuListItems from '../../../shared/models/menuListItems';

export default class Header extends Component{
  constructor(){
    super();

    this.state = {
      items : MenuListItems
    }

    this.linkClickHandler = this.linkClickHandler.bind(this);
  }

  linkClickHandler(id){
    this.setState(prevState => {
      const menuListChanged = prevState.items.map((t, i) => {
        if(id == i){
          t.text = "`Click Event` Recorded"
        }
      return t
    })
    return {
      items : menuListChanged
    }
  })

}

  render(){
    return(
      <ul className="menu-list">
        {this.state.items.map((listItem, i) => <MenuItem
          key = { i }
          index= { i }
          item = { listItem }
          linkClickHandler={this.linkClickHandler}
        />)}
      </ul>
    )
  }
}
