import express from 'express';
import { Product } from '@inventory/db';

const router = express.Router();

router.get('/:productId', (req, res, next) => {
    res.send('Use src/routes to add routes, use src/middleware to add middlewares like auth, and use repository to expose API endpoint methods');
});

router.post('/', (req, res) => {
    const payload = req.body;

    const onSuccess = (product) => {
        res.status(201).send(product);
    }
    const onError = (err) => {
        res.status(404).send(err);
    }

    Product.create(payload, onSuccess, onError);
})

export default router;