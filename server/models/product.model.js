import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
 name: {
 type: String,
 trim: true,
 required: 'Name is required'
 },
 description: {
 type: String,
 trim: true,
 },
 price: {
type: Number,
required: 'Price is required'
},
 published: {
type: Boolean,
default: false
},
category: {
type: String,
trim: true,
required: 'Category is required'
}
},{
    collection: 'Products'
});
//module.exports = mongoose.model('Product', ProductSchema);
export default mongoose.model('Product', ProductSchema);

