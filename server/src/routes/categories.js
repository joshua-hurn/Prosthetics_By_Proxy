import { Router } from 'express';
import Table from '../../queries/table';

let router = Router();
let categoriesTable = new Table('Categories');

router.get('/:id?', (req, res) => {
    if (req.params.id) {
        categoriesTable.getOne(req.params.id)
            .then(results => res.send(results))
            .catch(e => res.status(500).send(e));
    } else {
        categoriesTable.getAll()
            .then(results => res.send(results))
            .catch(e => res.status(500).send(e));
    }
});

router.post('/', (req, res) => {
    categoriesTable.insert(req.body)
        .then(results => res.send(results))
        .catch(e => res.status(500).send(e));
});

router.put('/:id', (req, res) => {
    categoriesTable.update(req.params.id, req.body)
        .then(results => res.send(`Post ID ${req.params.id} has been updated!`))
        .catch(e => res.status(500).send(e));
});

router.delete('/:id', (req, res) => {
    categoriesTable.delete(req.params.id)
        .then(results => res.send(`Post ID ${req.params.id} has been deleted!`))
        .catch(e => res.status(500).send(e));
});
