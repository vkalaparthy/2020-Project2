const router = require('express').Router();

module.exports = (db) => {
  // Load register page
  router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/profile');
    } else {
      res.render('register');
    }
  });

  // Load profile page
  router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      db.User.findOne({
        where: {
          id: req.session.passport.user.id
        }
      }).then(() => {
        const user = {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated()
        };
        // console.log(user);
        res.render('profile', user);
      });
    } else {
      res.redirect('/');
    }
  });

  // Load dashboard page
  router.get('/', (req, res) => {
    console.log('In Html route get /');
    if (req.isAuthenticated()) {
      db.Jabber.findAll({ where: { UserId: req.session.passport.user.id }, raw: true }).then(function (dbJabber) {
        console.log('after findAll');
        console.log(dbJabber);
        res.render('dashboard', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          jabber: dbJabber
        });
      });
    } else {
      res.render('login_dashboard');
    }
  });

  // Load dashboard page
  router.get('/dashboard', (req, res) => {
    console.log('In html route get /dashboard');
    if (req.isAuthenticated()) {
      db.Jabber.findAll({ where: { UserId: req.session.passport.user.id }, raw: true }).then(function (dbJabber) {
        res.render('dashboard', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          msg: 'Welcome!',
          jabber: dbJabber
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Load example index page
  router.get('/jabber', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('jabber', {
        userInfo: req.session.passport.user,
        isloggedin: req.isAuthenticated(),
        msg: 'Welcome!'
      });
    } else {
      res.redirect('/');
    }
  });

  // Load example page and pass in an example by id
  router.get('/example/:id', function (req, res) {
    if (req.isAuthenticated()) {
      db.Example.findOne({ where: { id: req.params.id }, raw: true }).then(function (dbExample) {
        res.render('example-detail', {
          userInfo: req.session.passport.user,
          isloggedin: req.isAuthenticated(),
          example: dbExample
        });
      });
    } else {
      res.redirect('/');
    }
  });

  // Logout
  router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid', { path: '/' });
      res.redirect('/');
    });
  });

  // Render 404 page for any unmatched routes
  router.get('*', function (req, res) {
    res.render('404');
  });

  return router;
};
