// supertest -> lib que permite teste de requicoes http
import request from 'supertest'
import app from '../config/app'

describe('body parser', () => {
  it('', async () => {
    app.post('/body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app).post('/body_parser')
      .send({ name: 'Jhon' })
      .expect({ name: 'Jhon' })
  })
})
