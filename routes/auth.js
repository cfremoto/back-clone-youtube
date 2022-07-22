import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
/**
 * @swagger
 * components:
 *  userschema:
 *   user:
 *    type: object
 *    properties:
 *      name:
 *          type: string
 *          description: the user name
 *      email:
 *          type: string
 *          description: the user email
 *      pasword:
 *          type: string
 *          description: the user password
 *      img:
 *          type: string
 *          description: the user image
 *      example:
 *          name: cesar Fernandez
 *          email: cesar@example.com
 *          password: 12345Clave
 *
 */
/**
 * @swagger
 * tags:
 *   name: Users
 */

/**
 * @swagger
 * path: /users
 * post:
 *  summary: create a new user
 *  tags: [user]
 *  resquesBody:
 *   required: true
 *   content:
 *    aplication/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/User'
 *   responses:
 *      200:
 *      description: new user created
 */
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;
