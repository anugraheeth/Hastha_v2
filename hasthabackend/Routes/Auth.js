import express from 'express'
import login from '../Controller/Authentication.js'
import dashboard from '../Controller/Data.js'
import Details from '../Controller/Details.js'
import publicc from '../Controller/Public.js'
import Filter from '../Controller/Filter.js'

const Routes = express.Router()

Routes.get('/',publicc) // newly added
Routes.post('/login',login)
Routes.get('/dashboard',dashboard)
Routes.get('/resdetails',Details.resdetails)
Routes.get('/comdetails',Details.comdetails)
Routes.get('/hosdetails',Details.hosdetails)
Routes.get('/edudetails',Details.edudetails)
Routes.get('/inddetails',Details.inddetails)
Routes.get('/reldetails',Details.reldetails)
Routes.get('/resfilter',Filter.RFilter)
Routes.get('/comfilter',Filter.CFilter)

export default Routes