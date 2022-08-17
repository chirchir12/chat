import React, { Component } from "react"
import { connect } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import "./index.css"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import { login } from "../../data/auth/actions"

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {username:null}
  }
  onLogin = (e)=> {
    const username = e.target.value
    this.setState({username})

  }
  login = ()=> {
   const id = uuidv4()
   let user ={}
   user[id] = {username:this.state.username, id}
    this.props.dispatch(user)
    //send to changes to to server
    this.props.socket.send(JSON.stringify({...user, type:'ADD_USER'}))
  }
  showLoginSection = () => (
    <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__profile">
            <p className="account__name">Hello, user!</p>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="my-input">Enter Username</InputLabel>
              <Input id="my-input" onChange={this.onLogin} aria-describedby="my-helper-text" />
              <br />
              <Button onClick={this.login} variant="contained">Join Chat</Button>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  )
  render() {
    return <>{this.showLoginSection()}</>
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: (username) => {
    dispatch(login(username))
  },
})

export default connect(null, mapDispatchToProps)(Login)
