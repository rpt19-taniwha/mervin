/**
 * @jest-environment node
 */

import { mockData } from './sample/sample_test.js'

const db = require('../db/database.js');

describe('Database fetch', () => {
  it('should return product object with model keys', async done => {
    db.fetch(mockData.productNumber, (error, result) => {
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('productNumber');
      expect(result).toHaveProperty('productName');
      expect(result).toHaveProperty('productDescription');
      expect(result).toHaveProperty('productCategory');
      expect(result).toHaveProperty('versions');
      done();
    });
  });
  it('should return product object with correct key/value pairs', async done => {
    db.fetch(mockData.productNumber, (error, result) => {
      expect(result.productNumber).toEqual(mockData.productNumber);
      expect(result.productName).toEqual(mockData.productName);
      expect(result.productDescription).toEqual(mockData.productDescription);
      expect(result.productCategory).toEqual(mockData.productCategory);
      expect(result.versions).toEqual(mockData.versions);
      done();
    });
  })
})