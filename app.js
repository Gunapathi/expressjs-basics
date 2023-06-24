// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(express.static(path.join(__dirname, 'public')))

// use 404 or static route at the end to avaoid early access of the pages
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.use(bodyParser.urlencoded())

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)