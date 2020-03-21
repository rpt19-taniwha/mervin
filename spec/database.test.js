const db = require('../db/database.js');

describe('Database', () => {
  it('Fetch should return product object', done => {
    db.fetch(549504785, (results) => {
      var result = results[0];
      expect(typeof result).toBe('object');
      expect(result.productNumber).toEqual(549504785);
      expect(result).toHaveProperty('productNumber');
      expect(result).toHaveProperty('productName');
      done();
    });
  });
  it('Fetch should return product object with correct key/value pairs', done => {
    db.fetch(549504785, (results) => {
      var result = results[0];
      expect(result).toHaveProperty('productNumber');
      expect(result.productNumber).toEqual(549504785);
      expect(result).toHaveProperty('productName');
      expect(result.productName).toEqual('PokéNatomy: The Science of Pokémon (An Unofficial Guide)');
      done();
    });
  })
})