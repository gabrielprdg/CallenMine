// cors -> lib que permitirá conexão com várias fontes externas a nossa api.
import request from 'supertest'
import app from '../config/app'

describe('content Type', () => {
  it('Should set json as default response', async () => {
    app.get('/content_type', (req, res) => {
      res.send('')
    })
    await request(app).get('/content_type')
      .expect('content-type', /json/)
  })

  it('Should return a any type required', async () => {
    app.get('/content_type_xml', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app).get('/content_type_xml')
      .expect('content-type', /xml/)
  })
})
