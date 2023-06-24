import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import router from './routes'
import { PORT } from './constants'

const app = express()

// Middlewares
app.use(cors())
app.use(logger('tiny'))
app.use(express.static('files'))

app.use(router)

app.listen(PORT)
console.log('Server on port ' + PORT)
