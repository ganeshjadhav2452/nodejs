const express = require('express')
const app = express()
const path = require('path')
const ageFilter = require('./middleware')


const route = express.Router()

route.use(ageFilter)
// app.use(ageFilter) // --> if we want to  use middleware on spesific rout then  instead of passing this function to app.use() we can pass the middleware function as sencond paramter in the app.get (means after the url)

app.set('view engine', 'ejs')
app.get('/', (request, response)=>{
    const user={
        name:'ganesh jadhav',
        email:'ganeshjadhav2452@gmail.com',
        city:'chatrpati sambhaji nagar',
        skills:['js','php','java']

    }
    response.render(`profile`,{user})
})

route.get('/login',(request, response)=>{
    response.render('login')
})
app.use('/', route)





// console.log(folderPath)

// app.use(express.static(folderPath))

// app.get('/',(req,res)=>{
//     res.send('hello, this is home page')


// })

// app.get('/about',(req,res)=>{
//     res.send('we are the best ')
// })

app.listen(4000)