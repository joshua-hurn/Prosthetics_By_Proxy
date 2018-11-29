import { Router } from 'express';
import classesRouter from './classes';
import authRouter from './auth';
import prostheticsRouter from './prosthetics';
import categoriesRouter from './categories';
import usersRouter from './users';
import stripeDonationsRouter from './stripeDonations';
import queriesRouter from './queries';
import contactRouter from './contactform';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/classes', classesRouter);
router.use('/prosthetics', prostheticsRouter);
router.use('/categories', categoriesRouter);
router.use('/q', queriesRouter);
router.use('/users', usersRouter);

export default router;