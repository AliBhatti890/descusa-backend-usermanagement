// src/routes/user.routes.ts

import { Elysia } from 'elysia';
import { AuthController } from '../controller/auth.controller ';

export const AuthRoutes = new Elysia()
 
AuthRoutes.group('/auth', (group: any) => {
 
  group.post('/login', AuthController.login)
 
  return group
})
 

 
