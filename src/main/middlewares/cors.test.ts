// cors -> lib que permitirá conexão com várias fontes externas a nossa api.
import request from 'supertest'
import app from '../config/app'

describe('cors', () => {
  it('Should enable cors', async () => {
    app.get('/cors', (req, res) => {
      res.send()
    })
    await request(app).get('/cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-headers', '*')
      .expect('access-control-allow-methods', '*')
  })
})
