var request = require('supertest');
var expect = require('chai').expect;
var sinon = require('sinon');
var model = require('../webserver/schema/movieschema.js');
/*Stubbing find method of model*/
var modelStub = sinon.stub(model, 'find');

var app = require('../server.js');
var address = request("http://localhost:8080")

describe('Test my users', function(err){

  describe('Testing get router', function(err){
    this.timeout(15000);

    it('should attempt to sample', function(done){
      setTimeout(done, 15000);
      address
        .get('/stream')
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          expect(res.text).to.be.equal("respond with a resource");
          done();
        });
    });
  });


  describe('CRUD Movie Data', function(err){
    this.timeout(15000);
 //    var token;
 //
 // before(function(done) {
 //   address
 //      .post('/login')
 //      .send({'_id': '58e8ee7d0af6110ba0783ed1', 'username': 'admin',  'password': 'admin'})
 //     .end(function(err, res) {
 //       if (err) throw err;
 //       token = { access_token: res.body.token }
 //       done();
 //     });
 // });

    it('should attempt to save movie data', function(done){
      address
        .post('/stream/add')
        .send({'user':{'_id': '58e8ee7d0af6110ba0783ed1', 'username': 'admin',  'password': 'admin'},'Title': 'Star Wars: Episode IV - A New Hope', 'Year': '1977', 'imdbID': 'tt0076759', 'Poster':'https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', 'comments':'Nice Movie'})
        //.query(token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if (err) return done(err);
          //console.log(res.body);
          expect(res.body.success).to.be.equal("SAVED");
          done();
        });
    });

    beforeEach(function(done){
      modelStub.yields(null, [{'Title': 'Star Wars: Episode IV - A New Hope', 'Year': '1977', 'imdbID': 'tt0076759', 'Poster':'"https://images-na.ssl-images-amazon.com/images/M/MV5BYzQ2OTk4N2QtOGQwNy00MmI3LWEwNmEtOTk0OTY3NDk2MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg', 'comments':'good'}]);
      done();
    });

    it('should attempt to get movie data', function(done){
      address
        .get('/stream/display')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if (err) return done(err);
          //console.log(res.body);
          expect(res.body[0].Year).to.be.equal("1977");
          done();
        });
    });
  });

  it('should attempt to update movie data', function(done){
    address
      .put('/stream/update')
      .send({'id': '58e526ccffba2408158a8897','comments':'Sherlock homes nice movie'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res){
        if (err) return done(err);
        //console.log(res.body);
        expect(res.body.success).to.be.equal("updated");
        done();
      });
  });

  it('should attempt to delete movie data', function(done){
    this.timeout(15000);
    setTimeout(done, 15000);
    address
      .delete('/stream/delete')
      .send({'id': '58e9e5f62b1a4b0dda500d30'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res){
        if (err) return done(err);
        //console.log(res.body);
        expect(res.body.success).to.be.equal("deleted");
        done();
      });
  });

});
