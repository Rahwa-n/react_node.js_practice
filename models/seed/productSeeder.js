var Product = require('../models/product');

var mongoose = require('mongoose');
const { exists } = require('../product');

mongoose.connect('localhost: 27017/flowers');

var products = [
  new Product({
    imagePath: '../images/hibiscus.jpg',
    title: 'Rose Flower',
    description: 'Beautiful Flowers',
    price: 10
  }),
  new Product({
    imagePath: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/04LDEYRW59.jpg"" alt="rose flower" class="img-responsive',
    title: 'Rose Flower',
    description: 'Beautiful Flowers',
    price: 10
  }),
] ;

var done = 0;
for (var i = 0; i < products.length; i++){
  product[i].save(function(err, result){
    done++;
    if (done === products.length) {
      exists();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

