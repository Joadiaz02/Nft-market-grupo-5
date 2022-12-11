function autenticadorMiddleware(req, res, next){
    if(!req.session.userLogged){
      return res.redirect('/usuario/login')
        
    }else{
        next();
    }
    
    
}

module.exports = autenticadorMiddleware;