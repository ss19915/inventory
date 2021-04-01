import express from 'express';
import { Product } from '@inventory/db';

const router = express.Router();

router.get('/:productId', (req, res) => {
    const { productId } = req.params;

    const onSuccess = (product) => {
        res.send(product);
    };

    const onError = (err) => {
        res.status(400).send(err);
    };

    const onNotFound = (err) => {
        res.status(404).send(err);
    };

    Product.getProductById(productId, onSuccess, onNotFound, onError);
});

router.get('/', (req,res) => {
    const onSuccess = (products) => {
        res.send(products);
    };

    const onError = (err) => {
        res.status(400).send(err);
    };

    Product.getAll(onSuccess, onError);
});

router.post('/', (req, res) => {
    const payload = req.body;

    const onSuccess = (product) => {
        res.status(201).send(product);
    }
    const onError = (err) => {
        res.status(400).send(err);
    }

    Product.create(payload, onSuccess, onError);
})

export default router;