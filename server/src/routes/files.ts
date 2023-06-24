import { Router } from 'express'
import multer from 'multer'

const router = Router()
const upload = multer({ dest: 'files' })

router.post('/', upload.single('file'), (req, res) => {
  const file = req.file
  try {
    if (file === null) throw new Error('Please upload a file')
    res.send(`/${file?.filename ?? ''}`)
  } catch (err) {
    res.status(500).send(`/${file?.filename ?? ''}`)
  }
})

export { router }
