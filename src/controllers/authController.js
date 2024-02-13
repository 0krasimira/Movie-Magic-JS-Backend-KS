const authRouter = require("express").Router()
const authManager = require("../managers/authManager")
const {getErrorMessage} = require('../utils/errorUtils')
 
authRouter.get("/register", (req, res) => {
    res.render('auth/register')
})

authRouter.post("/register", async (req, res) => {
    const userData = req.body
    try {
        await authManager.register(userData)
        res.redirect("/auth/login")
    } catch (error) {
        const message = getErrorMessage(error)
        res.render('auth/register', {...userData, error: message})
    }
    
})

authRouter.get("/login", async (req, res) => {
    res.render("auth/login")
})

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const token = await authManager.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    }catch(error){
        const message = getErrorMessage(error)
        res.status(404).render('auth/login', {error: message})
    }
    
});

authRouter.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})

module.exports = authRouter