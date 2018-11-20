const express = require('express');
const router = express.Router();
const multer = require('multer')
const Products = require('../models/products');

// options for UPLOAD IMAGE
const storage = multer.diskStorage({
    destination: function (req,file,callback){
        callback(null,'./uploads/');
    },
    filename: function (req,file,callback){
        callback(null,new Date().toISOString());
    }
})

//options for UPLOAD IMAGE
const upload = multer({ 
    storage: storage, 
    limits: {
    fileSize: 1024 * 1024 * 5
    },

});

router.get('/', async (req,res) => {
    const products = await Products.find({});
    res.json({products});
})

router.post('/', upload.single('photo'),async(req,res) => {
    const product = await new Products({
        name: req.body.name,
        price: req.body.price,
        photo: req.file.path
    })
    await product.save();
    res.json({message: "sukses create"});
})

module.exports = router;