import { Router } from 'express';
import getProstheticsOfCategory from '../queries/getProstheticsOfCategory';

let router = Router();

// leaving barebones router stuff to fill in later.
router.get('/prosthetics/category/:id', (req, res) => {
    getProstheticsOfCategory(req.params.id)
        .then(results => res.send(results))
        .catch(e => res.status(500).send(e));
});

export default router;