import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => { 
const product = new Product(req.body) 
try {
await product.save()
return res.status(200).json({ 
message: "Successfully added new product!!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const list = async (req, res) => {
	try {
	  let Products = await Product.find().select({});
	  res.json(Products);
	} catch (err) {
	  return res.status(400).json({
		error: errorHandler.getErrorMessage(err)
	  });
	}
  }
  
const productByID = async (req, res, next, id) => {
try {
	const product = await Product.findById(id);
	if (!product) {
		return res.status(404).json({ error: 'Product not found' });
	  }
	  req.profile = product;
	  next();
	} catch (err) {
	  return res.status(400).json({ error: 'Could not retrieve product' });
	}
  }
  
 const read = (req, res) => {
	return res.json(req.profile);
  }
const update = async (req, res) => { 
try {
let product = req.profile
product = extend(product, req.body) 
await product.save()
res.json(product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
	const remove = async (req, res) => { 
try {
const product = req.profile
await product.deleteOne();
res.json(product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const removeAll = async (req, res) => {
	try {
		await Product.deleteMany();
		res.status(200).json({message: "Sucessfully Deleted All Products"})
	}
	catch(err){
		return res.status(400).json({error: "There are no more Products to delete"})
	}
}
	export default { create, productByID, read, list, remove, removeAll, update }
