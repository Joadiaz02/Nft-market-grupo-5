const fs = require("fs");
const path=require('path');

const usuariosFile = path.join(__dirname, '../data/users.json');
let allUsuarios = JSON.parse(fs.readFileSync(usuariosFile, 'utf-8'));
const user = {

 //fileName: './data/users.json',
 
//getData: function(){
   // return this.fileName
  //},

  //findAll: function(){
   //   return this.getData()

  //},

  findByField: function(field,text){
     // let todosUsurios = this.allUsuarios;
       let userFound = allUsuarios.find(oneUser=>oneUser[field]===text);
      return userFound;
  },
}
//fs.writeFileSync(usuariosFile, JSON.stringify(allUsuarios, null, " "));
module.exports=user;