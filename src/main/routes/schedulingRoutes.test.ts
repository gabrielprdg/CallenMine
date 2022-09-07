import app from '../config/app'
import request from 'supertest'

describe('Scheduling Route', () => {
  it('Should an scheduling on success', async () => {
    await request(app).post('/expert/scheduling')
      .send({
        customer: {
          id: 'any_id',
          name: 'any_name'
        },
        note: 'any_id',
        schedules: [{
          scheduling_id: 'any_id',
          date: new Date(),
          experts: [{
            id: 'any_id',
            name: 'any_name'
          }]
        }]
      })
      .expect(200)
  })
})
