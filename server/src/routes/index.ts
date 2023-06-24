import { Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`

const router = Router()

readdirSync(PATH_ROUTER).forEach((filename) => {
  const name = filename.split('.')[0]
  if (name !== 'index') {
    import(`./${name}`)
      .then((route) => {
        router.use(`/${name}`, route.router)
      })
      .catch(err => { console.error(err) })
  }
})

export default router
