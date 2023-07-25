const express = require('express')
const app = express()
const path = require('path')

const folderPath = path.join(__dirname,'/public')

app.set('view engine', 'ejs')
app.get('/',(request, response)=>{
    const user={
        name:'ganesh jadhav',
        email:'ganeshjadhav2452@gmail.com',
        city:'chatrpati sambhaji nagar',
        skills:['js','php','java']

    }
    response.render(`profile`,{user})
})

app.get('/about',(request, response)=>{
    response.sendFile(`${folderPath}/about.html`)
})
app.get('/login',(request, response)=>{
    response.render('login')
})


app.get('/help',(request, response)=>{
    response.sendFile(`${folderPath}/help.html`)
})

app.get('*',(request, response)=>{
    response.sendFile(`${folderPath}/notFound.html`)
})



// console.log(folderPath)

// app.use(express.static(folderPath))

// app.get('/',(req,res)=>{
//     res.send('hello, this is home page')


// })

// app.get('/about',(req,res)=>{
//     res.send('we are the best ')
// })

app.listen(4000)