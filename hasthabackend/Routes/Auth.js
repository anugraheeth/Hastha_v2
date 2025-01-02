import express from 'express'
import login from '../Controller/Authentication.js'
import dashboard from '../Controller/Data.js'
import Details from '../Controller/Details.js'

const Routes = express.Router()

Routes.post('/login',login)
Routes.get('/dashboard',dashboard)
Routes.get('/resdetails',Details.resdetails)
Routes.get('/comdetails',Details.comdetails)
Routes.get('/hosdetails',Details.hosdetails)
Routes.get('/edudetails',Details.edudetails)
Routes.get('/inddetails',Details.inddetails)
Routes.get('/reldetails',Details.reldetails)

export default Routes