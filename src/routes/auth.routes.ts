import { Elysia } from 'elysia';
import { AuthController } from '../controller/auth.controller'; 

const AuthRoutes = new Elysia().use(
  new Elysia().group('/auth', (group) => {
    group.post('/login', AuthController.login);
    return group;
  })
);

export default AuthRoutes; 
