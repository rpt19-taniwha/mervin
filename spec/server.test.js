
const request = require('request');

describe('Server', () => {
  it('GET /products/:productNumber should return 200', done => {
    request({
      method: 'GET',
      url: 'http://127.0.0.1:9000/products/549504785',
    }, function(error, response, body) {
      expect(response.statusCode).toEqual(200)
      // expect(typeof (JSON.parse(body)[0])).toBe('object');
      // expect(response).toBe('object');
      done();
    })
  });
  // test('Fetch should return product object with correct key/value pairs', done => {
  //   db.fetch(549504785, (results) => {
  //     var result = results[0];
  //     expect(result).toHaveProperty('productNumber');
  //     expect(result.productNumber).toEqual(549504785);
  //     expect(result).toHaveProperty('productName');
  //     expect(result.productName).toEqual('PokéNatomy: The Science of Pokémon (An Unofficial Guide)');
  //     done();
  //   });
  // })
})

// it('Server product endpoint', done => {
//   request({
//     method: 'GET',
//     url: 'http://127.0.0.1:9000/products/549504785',
//   }, function(error, response, body) {
//     expect(typeof (JSON.parse(body)[0])).toBe('object');
//     done();
//   })
// });

