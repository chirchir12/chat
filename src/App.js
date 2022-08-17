import { connect } from 'react-redux'
import React, { Component } from "react"
import Chat from './components/Chat';
import Login from './components/Login';


const socket = new WebSocket('ws://localhost:8989')


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount(props){
    socket.onopen = () => {
      console.log('tls connection established')
      socket.send(JSON.stringify({connection:true}))
    }
    
  }
  render(){
    const {auth} = this.props
    console.log(auth, 'as auth')

    return (
      <>
      {auth && auth.username ? <Chat socket ={socket}/> : <Login  socket ={socket}/>}
      </>
    );
  }
}

const mapStateToProps = (state)=> {
  console.log(state, 'new state')
  return {
    auth:state.auth
  }
}


export default connect(mapStateToProps,null)(App);
