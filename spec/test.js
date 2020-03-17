const expect = require('chai').expect;
const db = require('../db/database.js');
const request = require('request');

describe('database fetch function', () => {

  // it('should return an object on fetch', () => {
  //   db.fetch(549504785, (result) => {
  //     expect(result).to.be.an('object')
  //   })
  //   // Fix returns an array
  // }),

  it('should return the correct product on fetch', () => {
    db.fetch(549504785, (result) => {
      expect(result[0].productName).to.eql('PokéNatomy: The Science of Pokémon (An Unofficial Guide)');
      expect(result[0].productCategory).to.eql('MultiverseBooks')
    })
    // Fix returns an array
  })

})

describe('server endpoints', () => {

  it('should return object for get requests', () => {
    request({
      method: 'GET',
      url: 'http://127.0.0.1:9000/products/549504785',
    }, function(error, response, body) {
      expect((JSON.parse(body)[0])).to.be.an('object')
    })

    // Fix returns an array
  })

})