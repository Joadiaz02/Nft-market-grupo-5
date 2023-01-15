const fs = require("fs");
const path=require('path');
const db = require('../database/models');
const usuario = require('../database/models/Usuario');
const usuariosFile = path.join(__dirname, '../data/users.json');
let allUsuarios = JSON.parse(fs.readFileSync(usuariosFile, 'utf-8'));
let todosUsurios = db.usuario.findAll()
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
findByFieldSql: function(field,text){
   
    let userFound = usuario.find(oneUser=>oneUser[field]===text);
   return userFound;
},
}
//fs.writeFileSync(usuariosFile, JSON.stringify(allUsuarios, null, " "));
module.exports=user;