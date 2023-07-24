const fs = require('fs')
const path = require('path')
const directoryPath = path.join(__dirname,'crudWithFileSystem');
const folderPath = `${directoryPath}/apple.txt`;

// for creating file 
fs.writeFileSync(folderPath, 'this is a simple text file')


// for reading file

fs.readFileSync(folderPath,'utf-8',(err,data)=>{
    console.log(data)

})

//for updating file
fs.appendFileSync(folderPath,'and this is added text by appendFile function of fs',(err)=>console.log(err))

// for renaming file

fs.renameSync(folderPath,`${directoryPath}/fruits.txt`,(err)=>console.log(err))


//for deleting the file

fs.unlinkSync(`${directoryPath}/fruits.txt`,(err)=>console.log(err))