import Router from 'express';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import passwordHasher from '../middlewares/passwordHashMiddleware';
import AuthController from '../controllers/authController';
import { signUp, signIn } from '../middlewares/authValidator';
import sendSMS from '../middlewares/sendSMS';

const router = Router();

router.post('/auth/signup', passwordHasher, sendSMS, asyncErrorHandler(AuthController.signUp))
// router.post('/auth/signin', signIn, asyncErrorHandler(AuthController.signIn))

export default router
