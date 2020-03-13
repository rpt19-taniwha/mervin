// MONGOOSE
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true, useUnifiedTopology: true });

var ProductSchema = new Schema ({
  productNumber: { type: Number, required: true },
  productName: String,
  productDescription: String,
  productCategory: String
})

var ProductModel = mongoose.model('products', ProductSchema);

// ProductModel.find(function(err, results) {
//   console.log(results)
// })

var save = function() {
  console.log('save')
}
var fetch = function(productNumber) {
  if (productNumber) {
    ProductModel.find({productNumber}, function(err, results) {
      console.log(results);
    })
  } else {
    console.log('false')
  }

}

fetch("90857");

module.exports = { save, fetch }