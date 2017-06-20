const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mock/db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.post('/auth', (req, res) => {
  res.json({
    "success": true,
    "token": "super-secret-token"
  })
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
