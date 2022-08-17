import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import { connect } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import Fab from "@material-ui/core/Fab"
import SendIcon from "@mui/icons-material/Send"
import { makeStyles } from "@material-ui/core/styles"
import Message from "../Message"
import {useState} from 'react'

import {addMessage}  from '../../data/messages/actions'

const useStyles = makeStyles({
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
})

function MessageArea(props) {
  const [message, setMessage] = useState('')

  const onChange = (e)=> {
    setMessage(e.target.value)
  }

  const onKeyPress  = (event)=> {
    createdMessage()
  }

  const onClick = ()=> {
    createdMessage()
    setMessage('')  
  }

  const createdMessage = ()=> {
    if (message){
      const chat = {message, id:uuidv4(), user:props.auth.id }
   props.dispatch(chat)
    props.socket.send(JSON.stringify({...chat, type:'ADD_MESSAGE'}))
    }
    
  }

  const classes = useStyles()
  const user = props.auth.id
  console.log(props.users)
  const messages = (props.messages|| []).map(message=> {
    let me = (message.user === user)
    let outher = props.users[message.user]
    message.me=me
    message.outher=outher
    return (<Message message={message} key={message.id}/>)
  })
  return (
    <Grid item xs={9}>
      <List className={classes.messageArea}>
        {messages}
      </List>
      <Divider />
      <Grid container style={{ padding: "20px" }}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
            name='message'
            value={message}
            onChange={onChange}
          />
        </Grid>
        <Grid xs={1} align="right" onClick={onClick}>
          <Fab color="primary" aria-label="add">
            <SendIcon  />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state)=> {
  return {
    auth:state.auth,
    users:state.users
  }
}

const mapDipatchWithActions = (dispatch)=> {
  return {
    dispatch:  (message)=> {
      dispatch(addMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDipatchWithActions)(MessageArea)
