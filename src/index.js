const expressConfigurator = require("./config/expressConfigurator")
const express = require("express")
const app = express()

expressConfigurator(app)