import { Router } from 'express';

let people = [
    {
        name: 'Jackson',
        age: 25
    },
    {
        name: 'Matt',
        age: 40
    }
];

let router = Router();

router.get('/', (req, res) => {
    res.json(people);
});

export default router;