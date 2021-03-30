import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Use src/routes to add routes, use src/middleware to add middlewares like auth, and use repository to expose API endpoint methods');
    next();
});


export default router;