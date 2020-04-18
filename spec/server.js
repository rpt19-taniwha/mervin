/**
 * @jest-environment node
 */

import { mockData } from './sample/sample_test.js'

const app = require('../server/app.js');
const request = require('supertest');

describe('Server products endpoint GET requests', () => {

  it('should return 200', async done => {
    const res = await request(app).get(`/products/${mockData.productNumber}`);
    expect(res.statusCode).toBe(200);
    done();
  });

  it('should return an empty object if product doesn\'t exist', async done => {
    const res = await request(app).get(`/products/123456789`);
    expect(res.body).toEqual({});
    done();
  });

  it('should return product object with model keys', async done => {
    const res = await request(app).get(`/products/${mockData.productNumber}`);
    expect(typeof res.body).toBe('object');
    expect(res.body).toHaveProperty('productNumber');
    expect(res.body).toHaveProperty('productName');
    expect(res.body).toHaveProperty('productDescription');
    expect(res.body).toHaveProperty('productCategory');
    expect(res.body).toHaveProperty('versions');
    done();
  });

  it('should return product object with correct key/value pairs', async done => {
    const res = await request(app).get(`/products/${mockData.productNumber}`);
    expect(res.body.productNumber).toEqual(mockData.productNumber);
    expect(res.body.productName).toEqual(mockData.productName);
    expect(res.body.productDescription).toEqual(mockData.productDescription);
    expect(res.body.productCategory).toEqual(mockData.productCategory);
    expect(res.body.versions).toEqual(mockData.versions);
    done();
  });

})

describe('Server listing endpoint GET requests', () => {

  it('should return 200', async done => {
    const res = await request(app).get(`/listing/${mockData.productNumber}`);
    expect(res.statusCode).toBe(200);
    done();
  })

})
