import express from 'express';
import {retrieveUserInfoCtrl, createUserController} from './user.controller.js';


const router = express.Router();


router.route('/')
        .get(retrieveUserInfoCtrl);
router.route('/register')
        .post(createUserController)


export default router;