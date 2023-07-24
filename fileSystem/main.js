const fs = require('fs')
const path = require('path')

const pathOfDirectory = path.join(__dirname)

for(let i = 0; i<=5; i++){
    fs.writeFileSync(`file${i}.txt`,`this is file${i}`)
}

