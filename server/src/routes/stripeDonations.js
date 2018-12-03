import { Router } from 'express';
import { charge } from '../utils/stripeCharge'

let router = Router();

router.post('/', async (req, res) => {
    console.log(req.body)
    let tokenId = req.body.token;
    let amount = req.body.amount;

    console.log('charging this amt', amount);
    try {
        let chargeResponse = await charge(tokenId, amount);
        
        res.json({ message: 'success', chargeResponse });
    } catch (err) {
        // console.log(err);
        res.sendStatus(500);
    }
});

export default router;