// import http from 'http';
// "description": "",
// import url from 'url'

const http = require('http');
const url = require('url');
const products = require('./data.json');

// GET,POST,PUT,DELETE

const server = http.createServer((req, res) => {
    const parseURL = url.parse(req.url)
    const urlPath = parseURL.path
    const urlParts = urlPath.split('/')

    if (req.method === 'GET') {
        if (urlPath === '/api/products') {
            // GET All Products
            res.writeHead(200, { "Content-type": "Application/json" })
            res.end(JSON.stringify(products));
        }
        else if (urlParts[2] && urlParts[2] == 'products' && !isNaN(urlParts[3])) {
            // GET Single product
            const productId = urlParts[3]
            const product = products.find(p => p.id == productId)
            res.writeHead(200, { "Content-type": "Application/json" })
            res.end(JSON.stringify(product));
            // https://youtu.be/Je-gNor76xI?t=10825
            // console.log('productId', productId)
        }
    }
})



const PORT = 3001;
const host = 'localhost';
server.listen(PORT, host, () => { console.log(`app is running on http://${host}:${PORT}`) });