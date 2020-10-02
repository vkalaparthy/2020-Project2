const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  router.get('/examples', AppController.getJabbers);
  router.post('/examples', AppController.createMessage);
  router.delete('/examples/:id', AppController.deleteMessage);

  router.get('/jabbers', AppController.getJabbers);
  router.get('/jabbers/:id', AppController.getJabber);
  router.put('/jabbers', AppController.updateJabber);
  router.post('/jabbers', AppController.createJabber);
  router.delete('/jabbers/:id', AppController.deleteJabber);

  return router;
};
