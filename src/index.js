const expressConfigurator = require("./config/expressConfigurator")
const express = require("express")
const handlebarsConfigurator = require("./config/handlebarsConfigurator")
const app = express()
const router = require("./controllers/homeController")


expressConfigurator(app)
handlebarsConfigurator(app)


const PORT = 5000
    
app.use(router)
    
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
})
