var express = require('express');
var router = express.Router();

var product = require('../controller/ProductController');

router.get('/',product.list);
// router.get('/show/:id', product.show);
// router.get('/edit/:id', product.edit);
// router.post('/update/:id', product.update);
// router.post('/delete/:id', product.delete);
// router.get('/create', product.create);
// router.post('/save', product.save);

module.exports = router;
