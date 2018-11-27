import { Router } from 'express';
//import each query individually.

let router = Router();

// leaving barebones router stuff to fill in later.
router.get('/', (req, res) => {
    getBlogsWithAuthor()
        .then(results => res.send(results))
        .catch(e => res.status(500).send(e));
});

export default router;