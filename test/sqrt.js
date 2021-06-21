process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('math', () => {
  // Consts
  const id = '3'
  const result = 9
  const successCode = 200
  const math = {
    id: `${id}`,
    result: `${result}`
  }

  describe('/GET sqrt', () => {
    it('it should GET a math ', done => {
      chai.request(server)
        .get(`/api/sqrt/${id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('result').eql(result)
          done()
        })
    })
  })
})
