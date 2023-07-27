const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({
    storage:multer.diskStorage({
        destination:(request,file,callBack)=>{
            callBack(null,'uploadFile')

        },
        filename:(request,file,callBack)=>{
            callBack(null,file.fieldname+'-'+Date.now()+'.jpg')
        }
        
    })
}).single("user_file")

app.use(express.json())

app.post('/upload',upload,(request,response)=>{
    response.send('file uploaded')
})

app.listen(6000)