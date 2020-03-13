// MONGOOSE
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true, useUnifiedTopology: true });

var ProductSchema = new Schema ({
  productName: String
})

var ProductModel = mongoose.model('products', ProductSchema);

// ProductModel.find(function(err, results) {
//   console.log(results)
// })

var save = function() {
  console.log('save')
}
var fetch = function() {
  console.log('fetch')
  ProductModel.find(function(err, results) {
    console.log(results);
  })
}


module.exports = { save, fetch }