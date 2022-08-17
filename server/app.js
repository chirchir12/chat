const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 })

const users = {}
const client = {}
const messages = {}

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    console.log(message.toString())
    switch (data.type) {
      case 'ADD_USER': {
        users[data.id] =  { username: data.username, id:data.id}
        client[ws] = data.username
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users,
          ws
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        let message  = {
          message: data.message,
          user:data.user, 
          id:data.id,
        }
        messages[message.id] = message
        broadcast({
          type: 'ADD_MESSAGE',
          messages
        }, ws)
        console.log(messages)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    const user = client[ws]
    delete users[user]
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})
