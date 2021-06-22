process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
// eslint-disable-next-line no-unused-vars
const should = chai.should()

chai.use(chaiHttp)

describe('math', function () {
  // Consts
  const id = '3'
  const result = 9
  const successCode = 200

  describe('/GET sqrt', function () {
    it('it should GET a math ', function (done) {
      chai.request(server)
        .get(`/api/sqrt/${id}`)
        .end((err, res) => {
          res.should.have.status(successCode)
          res.body.should.have.property('result').eql(result)
          done()
        })
    })
  })
})
