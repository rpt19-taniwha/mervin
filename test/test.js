const expect = require('chai').expect;
const db = require('../db/database.js')

describe('database fetch function', () => {

  it('should return an object on fetch', () => {
    db.fetch(549504785, (result) => {
      expect(result).to.be.an('object')
    })
    // Fix returns an array
  }),

  it('should return the correct product on fetch', () => {
    db.fetch(549504785, (result) => {
      expect(result[0].productName).to.eql('PokéNatomy: The Science of Pokémon (An Unofficial Guide)');
      expect(result[0].productCategory).to.eql('MultiverseBooks')
    })
    // Fix returns an array
  })

})