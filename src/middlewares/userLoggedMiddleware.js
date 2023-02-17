const db = require('../database/models');

    async function userLoggedMiddleware(req,res,next){
        res.locals.isLogged = false;

	if(req.cookies.userEmail){
		let emailInCookie = req.cookies.userEmail;
		let userFromCookie = await db.usuario.findOne({
			where: {
				correo_usuario: emailInCookie,
			}
		}).catch(function(errors){
			console.log(errors);
		});
		
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
		}
	}
    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();

}


module.exports = userLoggedMiddleware;
