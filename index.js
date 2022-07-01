const express = require('express')
const connectDB = require('./config/db')

const app = express()
//connects to DB
connectDB()

app.use(express.json({extended: false}))

//Define route
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'))

const PORT= 8000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})