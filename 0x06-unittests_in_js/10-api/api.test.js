const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Test GET /available_payments', () => {
  it('responds with JSON containing payment_methods', (done) => {
    request(app)
      .get('/available_payments')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});

describe('Test POST /login', () => {
  it('responds with welcome message', (done) => {
    const userName = 'Betty';
    request(app)
      .post('/login')
      .send({ userName })
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal(`Welcome ${userName}`);
        done();
      });
  });
});
