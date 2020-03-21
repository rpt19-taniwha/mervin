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

var save = function() {
  console.log('save pending')
}

var fetch = function(productNumber, callback) {
  ProductModel.find({ productNumber }, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      callback(results);
    }
  })
}

module.exports = { save, fetch };
