const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = 4000 || process.env.PORT


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layouts', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


app.listen(port)