import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"

function User({user, idx}) {
  
  return (
    <ListItem button key="RemySharp">
      <ListItemIcon>
        <Avatar
          alt="Remy Sharp"
          src={`https://material-ui.com/static/images/avatar/${idx}.jpg`}
        />
      </ListItemIcon>
      <ListItemText primary={user?.username}>{user?.username}</ListItemText>
      <ListItemText secondary="online" align="right"></ListItemText>
    </ListItem>
  )
}

export default User
