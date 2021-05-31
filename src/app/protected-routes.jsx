import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import authService from './service/auth.service'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
      render={
        (props) => {
          if(authService.isAuthenticated())
            return <Component {...props} />
          else{
            return <Redirect to={
              {
                pathname : "/auth",
                state : {
                  from : props.location
                }
              }
            } />
          }
        }
      }
    />
  )
}
