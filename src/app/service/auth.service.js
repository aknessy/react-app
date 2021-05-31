class AuthService {

  constructor(api){
    this.api = api
  }

  async login(credentials){
    let req = await fetch(this.api + '/login', { method : 'POST', headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(credentials)})
    let result = await req.json()

    if(result.access_token){
      let r = JSON.stringify(result)
      localStorage.setItem('user', result)

      return true
    }

    return false
  }

  async logout(token){
    let req = await fetch(this.api + '/logout', { headers : {Authorization : 'Bearer ' + token}})
    let res = await req.json()

    if(res.message){
      localStorage.removeItem('user')

      return true
    }

    return false
  }

  /**
   * Get the current user's access token
   * @param None
   * @return string
   */
  token(){
    return (JSON.parse(localStorage.getItem('user')).access_token)
  }

  /**
   * Check if the current user is logged in
   * @param None
   * @return boolean
   */
  isAuthenticated(){
    let loggedInUser = JSON.parse(localStorage.getItem('user'));

    if(loggedInUser){
      let expiresAt = (loggedInUser.expires_at ? loggedInUser.expires_at : undefined);

      if(expiresAt != undefined){
        let now = new Date();
        let expiry = new Date(expiresAt);
        now.setHours(0,0,0,0);

        if(expiry > now)
          return true
      }
    }

    return false;
  }

  /**
   * Get the currently logged in user's usertype
   * @param None
   * @return string
   */
  userType(){
    return (
      JSON.parse(localStorage.getItem('user')).user
      ? JSON.parse(localStorage.getItem('user')).user['usertype'] :
      null);
  }

  /**
   * Current User
   * @param None
   * @return any
   */
  currentUser(){
    return (JSON.parse(localStorage.getItem('user')).user
    ? JSON.parse(localStorage.getItem('user')).user
    : null);
  }
}

export default new AuthService('https://jsonplaceholder.typicode.com/todos')
