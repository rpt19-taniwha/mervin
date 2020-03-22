import { mockData } from './sample/sample_test.js'

const db = require('../db/database.js');

describe('Database fetch', () => {
  it('Fetch should return product object with model keys', done => {
    db.fetch(549504785, (results) => {
      var result = results[0];
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('productNumber');
      expect(result).toHaveProperty('productName');
      expect(result).toHaveProperty('productDescription');
      expect(result).toHaveProperty('productCategory');
      expect(result).toHaveProperty('versions');
      done();
    });
  });
  it('Fetch should return product object with correct key/value pairs', done => {
    db.fetch(549504785, (results) => {
      var result = results[0];
      expect(result.productNumber).toEqual(mockData.productNumber);
      expect(result.productName).toEqual(mockData.productName);
      expect(result.productDescription).toEqual(mockData.productDescription);
      expect(result.productCategory).toEqual(mockData.productCategory);
      expect(result.versions).toEqual(mockData.versions);
      done();
    });
  })
})