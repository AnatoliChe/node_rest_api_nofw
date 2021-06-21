async function getSqrt(req, res) {
    try {
	const id = req.url.split('/')[3]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ result: id*id }))
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getSqrt
}
