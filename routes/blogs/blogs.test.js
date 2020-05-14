const app = require('../app.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('Testing Blog Routes', () => {

    it('gets the root endpoint', async done => {
        const response = await request.get('/')

        expect(response.status).toBe(200)
        done()
      });

    afterAll(async (done) => {
        done()
    });

});
