import {React, Component} from 'react';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render(){
    let date = new Date();

    return (
      <div className="footer">
        <p>{date.getYear()}</p>
      </div>
    )
  }
}
