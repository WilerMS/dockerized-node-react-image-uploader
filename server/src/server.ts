import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import router from './routes'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(logger('tiny'))
app.use(express.static('files'))

app.use(router)

const PORT = 4000

app.listen(PORT)
console.log('Server on port ' + PORT)
