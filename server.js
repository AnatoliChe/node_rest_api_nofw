const http = require('http')
const { getSqrt } = require('./controllers/mathController')

const server = http.createServer((req, res) => {
    if(req.url.match(/\/api\/sqrt\/\w+/) && req.method === 'GET') {
        getSqrt(req, res)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT =  process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;
