import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import Table from '../table';

let router = Router();
let usersTable = new Table('Users');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

router.post('/register', (req, res) => {
    usersTable.insert(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(e => console.log(e));
});

export default router;