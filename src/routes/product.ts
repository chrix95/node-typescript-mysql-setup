import express from "express";
import controller from '../controllers/product';

const router = express.Router();

router.post('/', controller.createProduct);
router.get('/', controller.getAllProducts);

export = router;