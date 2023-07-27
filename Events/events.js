const express = require('express')
const EventEmitter = require('events')
const event = new EventEmitter()

const app = express()



event.on('sayHi',()=>{
    console.log('hi')
})


app.use(express.json())

app.get('/',async(request,response)=>{

    event.emit('sayHi')
    response.send('successful')

})



app.listen(3000)