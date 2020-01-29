const fileSystem = require('fs');
const csvJSON = require('csvjson');

const json = fileSystem.readFile('./source.json','utf-8',(err,fileContent)=>{
    if(err)
        console.log(err);
   const csv = csvJSON.toCSV(fileContent,{headers:'key'});
   fileSystem.writeFile('./destination.csv',csv,(err)=>console.log(err))
});