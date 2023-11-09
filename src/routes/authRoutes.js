import Router from 'express';
import asyncErrorHandler from '../utils/asyncErrorHandler';
import passwordHasher from '../middlewares/passwordHashMiddleware';
import AuthController from '../controllers/authController';
import { signUp, signIn } from '../middlewares/authValidator';
import tokenValidation from '../middlewares/tokenValidation';
import sendSMS from '../middlewares/sendSMS';

const router = Router();

router.post('/auth/:username/confirm', asyncErrorHandler(AuthController.confirmation))
router.post('/auth/signup', passwordHasher, sendSMS, asyncErrorHandler(AuthController.signUp))
router.post('/auth/signin', asyncErrorHandler(AuthController.signIn))
router.post('/auth/logout', tokenValidation, asyncErrorHandler(AuthController.logout))

export default router
