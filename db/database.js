// MONGOOSE
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new Schema({
  productNumber: { type: Number, required: true },
  productName: String,
  productDescription: String,
  productCategory: String,
  versions: {},
  storeNumber: Number
});

const ProductModel = mongoose.model('products', ProductSchema);

const fetch = (productNumber, callback) => {
  ProductModel.find({ productNumber }, (err, results) => {
    if (err) {
      throw err;
    } else {
      callback(results);
    }
  });
};

module.exports = { fetch };
