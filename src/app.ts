import http from 'http';
import express from 'express';
import config from './config/config';
import productRoutes from './routes/product'

const router = express();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use("/", productRoutes);
router.get("*", (req, res) => res.redirect("/"));

const PORT: string = process.env.PORT || "3000"

router.listen(PORT, () => console.log(`Server starting on port: ${PORT}`));