
import React, { Component } from "react"
import { connect } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {getUsers} from '../../data/users/actions'
import {receiveMessage} from '../../data/messages/actions'

import MessageArea from '../MessageArea';
import SideBar from '../SideBar';

const useStyles = {
  chatSection: {
    width: '100%',
    height: '80vh'
  }
};

class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {users:[]}
  }

  componentDidMount () {
    this.props.socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      this.setState({...this.state, users:data.users} )
      switch (data.type){
        case 'USERS_LIST':
          this.props.getUsers(data.users);
          break;
        case 'ADD_MESSAGE':
          this.props.getMessages(data.messages);
          break;
        default:
          return
      }
      
    }
  }

  render(){
    const messages = Object.values(this.props.messages)
    const authUser = this.props.auth
    const socket = this.props.socket
    const users = (Object.values(this.props.users) || []).filter(user => user.id !== authUser.id)
    return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={useStyles.chatSection}>
            {/* sidebar */}
            <SideBar users={users} authUser={authUser} />
            {/* message area */}
            <MessageArea messages={messages} socket={socket} />
        </Grid>
      </div>
  );
  }
}

const mapStateToProps = (state)=> {
  return {
    users:state.users,
    messages:state.messages,
    auth:state.auth
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    getUsers: (users)=> {
      dispatch(getUsers(users))
    } ,
    getMessages: (message)=> {
      dispatch(receiveMessage(message))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Chat);