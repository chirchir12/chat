
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import User from "../User"

const useStyles = makeStyles({
  borderRight: {
    borderRight: "1px solid #e0e0e0",
  },
})
function SideBar(props) {
  const classes = useStyles()
  console.log(props.users, 'these are them')


  const users = (props.users || []).map((user,idx) => {
    return (
      <User user={user} idx={idx+1} />
    )
  }
   
  )
  return (
    <Grid item xs={3} className={classes.borderRight}>
      <List>
        <User user={props.authUser} />
      </List>
      <Divider />
      <Grid item xs={12} style={{ padding: "10px" }}>
        <TextField
          id="outlined-basic-email"
          label="Search"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Divider />
      <List>
       
       {users}
      </List>
    </Grid>
  )
}

export default SideBar
