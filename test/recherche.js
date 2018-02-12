//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('RECHERCHE', () => {

  describe('/POST recherche', () => {
      it('Doit renvoyer tout les trajets', (done) => {
        chai.request(server)
            .post('/recherche')
            .type("form")
            .send({
              'depart' : 'nice',
              'destination' : 'paris',
              'date' : '12/08/2018'

            })
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.be.json;
              done();
            });
      });
  });

});