import { Router } from 'express';
import { signup } from '../controllers/user.controller';

const router = Router();



router.route('/signin').post(signup)


export default router