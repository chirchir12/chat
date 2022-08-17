import Grid from "@material-ui/core/Grid"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"

function Message({message}) {
  console.log(message)

  return (
    <ListItem key="1">
      <Grid container>
        <Grid item xs={12}>
          <ListItemText
            align={message.me ? "right":'left'}
            primary={message?.message}
          ></ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText align={message.me ? "right":'left'} secondary={`${message?.outher?.username} @09:30`}></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  )
}

export default Message
