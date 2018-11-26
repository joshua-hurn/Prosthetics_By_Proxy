import { Router } from 'express';
import { charge } from '../utils/stripeCharge'

let router = Router();

router.post('/', async (req, res) => {
    let tokenId = req.body.token.id;
    let amount = req.body.token.amount;
    try {
        let chargeResponse = await charge(tokenId, amount);
        res.json({ message: 'success' });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default router;