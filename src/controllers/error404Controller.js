const fs = require('fs');
const path=require('path');

const error404Controller={
    index: (req, res) =>{

        res.render('error404')
    }
}


module.exports = error404Controller;