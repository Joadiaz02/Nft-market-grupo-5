function guestMiddleware(req, res, next){
    if(req.session.userLogged){
      return res.redirect('/productos')
        
    }else{
        next();
    }
    
    
}

module.exports = guestMiddleware;