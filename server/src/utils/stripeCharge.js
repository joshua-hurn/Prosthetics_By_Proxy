import stripeLoader from 'stripe';
import { config } from '../config';
const stripe = stripeLoader(config.STRIPE_SK); // define secret key in config folder

function charge(token, amt) {
    // returning a promise, so when we call .charge elsewhere, we will use await
    return stripe.charges.create({
        amount: amt * 100, //amount in cents
        currency: 'usd',
        source: token,
        description: 'Statement description'
    });
};

export { charge };