const app = require('../app.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('mongoose');
const testDatabase = require('../database/testDatabase.js');
const blogs = require('../../db-models/BlogSchema.js');


describe('Testing Blog Routes', () => {

    /**
     * Connect to a new in-memory database before running any tests.
     */
    beforeAll(async () => await testDatabase.connect());

    /**
     * Clear all test data after every test.
     */
    afterEach(async () => await testDatabase.clearDatabase());

    /**
     * Remove and close the db and server.
     */
    afterAll(async () => await testDatabase.closeDatabase());

    it('gets the root endpoint', async done => {
        const response = await request.get('/')

        expect(response.status).toBe(200)
        done()
      });

});
