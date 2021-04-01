import express from 'express';
import products from './products';
import { RoutePaths } from '../constants';

const router = express.Router();

router.use(RoutePaths.products, products);

export default router;