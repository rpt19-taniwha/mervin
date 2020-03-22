import { mockData } from './sample/sample_test.js'

const request = require('request');

describe('Server products endpoint request', () => {
  it('GET /products/:productNumber should return 200', done => {
    request({
      method: 'GET',
      url: 'http://127.0.0.1:9000/products/549504785',
    }, function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    })
  });

  it('GET /products/:productNumber should return product object with model keys', done => {
    request({
      method: 'GET',
      url: 'http://127.0.0.1:9000/products/549504785',
    }, function(error, response, body) {
      var result = JSON.parse(body);
      expect(typeof result).toBe('object');
      expect(result).toHaveProperty('productNumber');
      expect(result).toHaveProperty('productName');
      expect(result).toHaveProperty('productDescription');
      expect(result).toHaveProperty('productCategory');
      expect(result).toHaveProperty('versions');
      done();
    })
  });

  it('GET /products/:productNumber should return product object with correct key/value pairs', done => {
    request({
      method: 'GET',
      url: 'http://127.0.0.1:9000/products/549504785',
    }, function(error, response, body) {
      var result = JSON.parse(body);
      expect(result.productNumber).toEqual(mockData.productNumber);
      expect(result.productName).toEqual(mockData.productName);
      expect(result.productDescription).toEqual(mockData.productDescription);
      expect(result.productCategory).toEqual(mockData.productCategory);
      expect(result.versions).toEqual(mockData.versions);
      done();
    })
  });
});

describe('Server listing endpoint request', () => {
  it('GET /listing/:productNumber should return 200', done => {
    request({
      method: 'GET',
      url: 'http://127.0.0.1:9000/listing/549504785',
    }, function(error, response, body) {
      expect(response.statusCode).toEqual(200);
      done();
    })
  });
});



