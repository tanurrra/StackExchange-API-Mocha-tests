let chai = require("chai");
let chaiHttp = require('chai-http');
var expect = require('chai').expect;
let should = chai.should();
chai.use(chaiHttp);

describe('Just test async', function() {
    it('stackoverflow test return 200 and items in response', (done) => {
         chai.request(`https://api.stackexchange.com`)
            .get(`/2.2/tags?fromdate=1577404800&todate=1577491200&order=desc&sort=popular&site=stackoverflow`)
            .end( function(err, res) { 
                expect(res).to.have.status(200);
                // res.should.have.status(200); //just different way to check status
                res.body.should.be.a('object');
                res.body.should.have.property('items')
                    .which.is.an('array')
                done()
            })
        });
 });

 describe('Just test no async', function() {
    it('stackoverflow test2 return 200', () => {
        chai.request(`https://api.stackexchange.com`)
            .get(`/2.2/tags?fromdate=1577404800&todate=1577491200&order=desc&sort=popular&site=stackoverflow`)
            .end(function(err, res) { 
                expect(res).to.have.status(200);
            })
        });
 });