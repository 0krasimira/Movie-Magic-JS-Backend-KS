const jwt = require("../lib/jwt")
const { SECRET } = require("../config/config")

exports.auth = async (req, res, next) => {
    // get token
    const token = req.cookies["auth"]
    
    if(!token){
        return next()
    }

    // validate token
try{
    const decodedToken = await jwt.verify(token, SECRET)
    req.user = decodedToken  // !!!!!!!!!!!!!!!!!!!!!! attach decoded token object to the user property of the req object
    res.locals.isAuthenticated = true // works only for the life of the request, app.locals  - lives globally
    next()
}catch{
    res.clearCookie("auth");
    res.redirect("/auth/login")
}
    
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
       return res.redirect('/auth/login')
    }

    next()
}

//const isAuthenticated = !!req.user// double negation !!