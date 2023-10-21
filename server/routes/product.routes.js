import express from 'express'
	import productCtrl from '../controllers/product.controller.js' 
	const router = express.Router()
	

	//route for creating, listing, and deleting all
router.route('/api/Products') 
	.get(productCtrl.list)
	.post(productCtrl.create)
	.delete(productCtrl.removeAll)

	
	//route for updating, getting, and removing product by id
router.route('/api/Products/:productId') 
	.get(productCtrl.read)
	.put(productCtrl.update) 
	.delete(productCtrl.remove)
	
router.param('productId', productCtrl.productByID)

export default router
