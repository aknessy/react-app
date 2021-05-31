import { React, Component } from 'react'
import LandingPage from './landing/landing'
import { Error404Page } from './error-page/error404-page'
import { Switch, Route } from 'react-router-dom'
import Auth from './admin/layout/components/auth/auth'
import PasswordReset from './admin/layout/components/auth/password-reset'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component
{
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  render()
  {
    return (
      <div className="app-login-component">
        <Switch>
          <Route exact path="/" component={ LandingPage } />
          <Route exact path="/auth" component={ Auth } />
          <Route exact path="/auth/passwordreset" component={ PasswordReset } />
          <Route path="*" component={ Error404Page } />
        </Switch>
      </div>
    )
  }
}

export default App
